import React, { Component, Fragment } from 'react'
import { FormSpy, Form, Field } from 'react-final-form'
import { connect } from 'react-redux'
import ItemContainer from './../../containers/ItemsContainer'
import {
  Typography,
  Button,
  MenuItem,
  Select,
  Checkbox,
  ListItemText,
  FormControl,
  FormHelperText,
  InputLabel,
  Input
} from '@material-ui/core'
import {
  resetImage,
  updateNewItem,
  resetNewItem
} from './../../redux/modules/shareItemPreview'

import TextField from './TextField/TextField'

import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

class ShareForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tagError: false,
      disabled: false,
      fileSelected: false,
      selectedTags: [],
      submitted: false,
      imageSelectText: 'Select an Image'
    }
    this.fileRef = React.createRef()
  }

  onSubmit = values => {
    // console.log(values)
  }

  validate = values => {
    const errors = {}
    if (!values.title) {
      errors.title = 'Required'
    }
    if (!values.description) {
      errors.description = 'Required'
    }

    return errors
  }

  //WOT iS THIS SUPPOSED TO BE???
  dispatchUpdate(values, tags, updateNewItem) {
    if (!values.imageUrl && this.state.fileSelected) {
      this.getBase64Url().then(imageUrl => {
        updateNewItem({
          imageUrl
        })
      })
    }

    updateNewItem({
      ...values,
      tags: this.applyTags(tags)
    })
  }

  //converts an image to base64 string
  getBase64Url() {
    return new Promise(resolve => {
      const reader = new FileReader()
      reader.onload = e => {
        resolve(
          `data:${this.state.fileSelected.mimeType};base64, ${btoa(
            e.target.result
          )}`
        )
      }
      reader.readAsBinaryString(this.state.fileSelected)
    })
  }

  handleImageSelect = e => {
    this.setState({ fileSelected: e.target.files[0] })
  }

  applyTags(tags) {
    return (
      tags &&
      tags
        .filter(t => this.state.selectedTags.indexOf(t.id) > -1)
        .map(t => ({ title: t.title, id: t.id }))
    )
  }
  // validateTags (){
  //   console.log(this.state.selectedTags,'validates')
  // }

  handleCheckbox(event) {
    const errors = {}
    this.setState({
      selectedTags: event.target.value
    })

    const minimumOne = event.target.value.length

    if (minimumOne === 0) {
      this.setState({ tagError: true })
    } else this.setState({ tagError: false })
  }

  generateTagsText(tags, selected) {
    return tags
      .map(t => (selected.indexOf(t.id) > -1 ? t.title : false))
      .filter(e => e)
      .join(', ')
  }

  changeImageSelectButton() {
    this.setState({ imageSelectText: 'Reset Image' })
  }

  async saveItem(values, tags, addItem) {
    console.log({validity, files:[file]} ,'current file')

    const {
      validity,
      files: [file]
    } = this.fileRef.current

    console.log(this.fileRef.current, file ,'current file')
    console.log({validity}, 'am i valid')

    if (!validity.valid || !file) return
 
    try {
      const itemData = {
        ...values,
        tags: this.applyTags(tags)
      }
      await addItem.mutation({
        variables: {
          item: itemData,
          image: file
        }
      })
      this.setState({ done: true })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { classes } = this.props
    const { resetImage, updateNewItem, resetNewItem } = this.props

    return (
      <ItemContainer>
        {/* PUT addITEM back */}
        {({ addItem, tagData: { tags, loading, error } }) => {
          if (loading) {
            return <p>Content Loading...</p>
          }

          if (error) {
            return error
          }

          return (
            <div className={classes.root}>
              <Typography className={classes.header}>
                Share. Borrow. Prosper.
              </Typography>

              <Form
                onSubmit={values => {
                  this.saveItem(values, tags, addItem)
                  console.log( 'form values')
                }}
                validate={this.validate}
                render={({
                  handleSubmit,
                  pristine,
                  invalid,
                  form,
                  submitting,
                  values
                }) => (
                  <form onSubmit={handleSubmit}>
                    <FormSpy
                      subscription={{ values: true }}
                      component={({ values }) => {
                        if (values) {
                          this.dispatchUpdate(values, tags, updateNewItem)
                        }
                        return ''
                      }}
                    />

                    <Field name="imageurl">
                      {(input, meta) => (
                        <Fragment>
                          <Button
                            onClick={() => {
                              this.fileRef.current.click()
                              //TODO: if clicked - and there is an image selected already, clear image from the state and start over
                            }}
                          >
                            <Typography className={classes.imageSelectText}>
                              {this.state.imageSelectText}
                            </Typography>
                          </Button>
                          <input
                            onChange={e => {
                              this.handleImageSelect(e)
                              this.changeImageSelectButton()
                            }}
                            type="file"
                            accept="image/*"
                            hidden
                            ref={this.fileRef}
                          />
                        </Fragment>
                      )}
                    </Field>

                 

                    <div>
                      <Field
                        name="title"
                        component={TextField}
                        type="text"
                        label="Name Your Item"
                        className={classes.inputName}
                        // validate={required}
                      />
                    </div>

                    <div>
                      <Field
                        name="description"
                        component={TextField}
                        type="text"
                        multiline
                        rows="4"
                        label="Describe Your Item"
                        className={classes.inputDescription}

                        // validate={required}
                      />
                    </div>

                
                    <FormControl
                      id="tagSelector"
                      className={classes.tagSelector}
                      error={this.state.tagError}
                    >
                      <Field name="tags">
                        {({ input, meta }) => {
                          return (
                            <div>
                              <InputLabel htmlFor="select-multiple-checkbox">
                                Tags - Please select at least one
                              </InputLabel>

                              <Select
                                multiple
                                value={this.state.selectedTags}
                                onChange={event => this.handleCheckbox(event)}
                                error={this.state.tagError}
                                input={
                                  <Input
                                    id="select-multiple-checkbox"
                                    className={classes.tagInputLabel}
                                  />
                                }
                                renderValue={selected => {
                                  return this.generateTagsText(tags, selected)
                                }}
                              >
                                {tags &&
                                  tags.map(tag => (
                                    <MenuItem key={tag.id} value={tag.id}>
                                      <Checkbox
                                        checked={
                                          this.state.selectedTags.indexOf(
                                            tag.id
                                          ) > -1
                                        }
                                      />
                                      <ListItemText primary={tag.title} />
                                    </MenuItem>
                                  ))}
                              </Select>
                            </div>
                          )
                        }}
                      </Field>
                      {/* <FormHelperText>Select at least one</FormHelperText> */}
                    </FormControl>

                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.shareSubmitButton}
                      disabled={this.state.disabled}
                    >
                      Share
                    </Button>
                    {/* </div>
                )}
              /> */}
                  </form>
                )}
              />
              <div id="texthere" />
            </div>
          )
        }}
      </ItemContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateNewItem(item) {
    // Inside this function we can dispatch data to our reducer.
    dispatch(updateNewItem(item))
  },
  resetNewItem() {
    dispatch(resetNewItem())
  },
  resetImage() {
    dispatch(resetImage())
  }
})

export default connect(
  undefined,
  mapDispatchToProps
)(withStyles(styles)(ShareForm))
