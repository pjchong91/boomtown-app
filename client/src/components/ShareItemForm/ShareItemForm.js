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
import { ViewerContext } from '../../context/ViewerProvider'


class ShareForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tagError: false,
      fileSelected: false,
      selectedTags: [],
      tagsPristine: true,
      enabledByTag: false,
      enabledByImage: false,
      enabledByText: false,
      submitMessage: false,
    }
    this.fileRef = React.createRef()
  }

  

  validate = values => {
    const errors = {}
    this.setState({submitMessage:false})
    if (!values.title) {
      errors.title = 'Required'
      this.setState({ enabledByText: false })
    }
    if (!values.description) {
      errors.description = 'Required'
      this.setState({ enabledByText: false })
    }
    if (values.description && values.title) {
      this.setState({ enabledByText: true })
    }

    return errors
  }

  //Check has the tags menu been touched?  And if so, have tags been selected?  If not, throw an error
  validateTags() {
    if (!this.state.tagsPristine && this.state.selectedTags.length === 0) {
      this.setState({ tagError: true })
      this.setState({ enabledByTag: false })
    } else {
      this.setState({ tagError: false })
      this.setState({ enabledByTag: true })
    }
  }

  //If people try to submit when the page is loaded & tags are not yet showing error for no tags selected
  //TODO: Delete this if button not enabled until fields complete
  // validateTagsSubmit() {
  //   if (this.state.selectedTags.length === 0) {
  //     this.setState({ tagError: true })
  //   }
  // }

  handleSubmitMessage(){
    this.setState({submitMessage:true})
    
  }

  //Updates card according to changes in the form
  dispatchUpdate(values, tags, updateNewItem) {
    if (!values.imageurl && this.state.fileSelected) {
      this.getBase64Url().then(imageurl => {
        updateNewItem({
          imageurl
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
          `data:${this.state.fileSelected.type};base64, ${btoa(
            e.target.result
          )}`
        )
      }
      reader.readAsBinaryString(this.state.fileSelected)
    })
  }

  handleImageSelect = e => {
    this.setState({ fileSelected: e.target.files[0] })
    this.setState({ enabledByImage: true })
  }

  applyTags(tags) {
    return (
      tags &&
      tags
        .filter(t => this.state.selectedTags.indexOf(t.id) > -1)
        .map(t => ({ title: t.title, id: t.id }))
    )
  }

  handleCheckbox(event) {
    this.setState({
      selectedTags: event.target.value
    })
    this.validateTags()
  }


  generateTagsText(tags, selected) {
    return tags
      .map(t => (selected.indexOf(t.id) > -1 ? t.title : false))
      .filter(e => e)
      .join(', ')
  }

  handleTagsPristine() {
    this.setState({ tagsPristine: false })

    this.validateTags()
  }

  async saveItem(values, tags, addItem) {
    const {
      validity,
      files: [file]
    } = this.fileRef.current

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
    } catch (e) {
      console.log(e)
    }
  }

  uploadViewer(viewer,values, updateNewItem){
    this.props.updateNewItem({
      ...values,
      itemowner:{
        fullname: viewer.fullname,
        email: viewer.email
      }
    })
  }

  handleShareReset(resetImage, resetNewItem) {
    this.setState({ selectedTags: [] })
    this.setState({ fileSelected: false })
    resetImage()
    resetNewItem()
    this.handleSubmitMessage()
  }

  render() {
    const { classes } = this.props
    const { resetImage, updateNewItem, resetNewItem } = this.props
    return (
      <ViewerContext.Consumer>
    {({viewer}) => (
    this.uploadViewer(viewer, updateNewItem),
   
      <ItemContainer>
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
                }}
                validate={this.validate}
                render={({
                  handleSubmit,
                  pristine,
                  invalid,
                  form,
                  submitting,
                  values,
                  reset
                }) => (
                  <form
                    onSubmit={event => {
                      handleSubmit(event)
                      form.reset()
                      this.handleShareReset(resetImage, resetNewItem)
                    }}
                    id="shareItemForm"
                  >
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
                         
                          className= {`${!this.state.fileSelected ? classes.selectImageButton : classes.selectImageButton2
                          }`}
                            onClick={() => {
                              this.fileRef.current.click()
                              //TODO: if clicked - and there is an image selected already, clear image from the state and start over
                            }}
                          >
                            <Typography className={classes.imageSelectText}>
                              {!this.state.fileSelected
                                ? 'Select an Image'
                                : 'Reset Image'}
                        
                            </Typography>
                          </Button>
                          <input
                            onChange={e => {
                              this.handleImageSelect(e)
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
                      <Field name="tags" prisitine={this.state.tagsPristine}>
                        {({ input, meta }) => {
                          return (
                            <div>
                              <InputLabel htmlFor="select-multiple-checkbox">
                                Tags - Please select at least one
                              </InputLabel>

                              <Select
                                multiple
                                onClick={() => this.handleTagsPristine()}
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
                    </FormControl>
<div className={classes.submission}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.shareSubmitButton}
                      disabled={
                        !(
                          this.state.enabledByText &&
                          this.state.enabledByImage &&
                          this.state.enabledByTag
                        )
                      }
                      // onClick={() => this.validateTagsSubmit()}
                      // onClick={() => this.handleSubmitMessage()}
                    >
                      Share
                    </Button>

                    <Typography variant='title' className={classes.submitMessage}>
               {this.state.submitMessage? 
               'Thanks for the submission!' : ''}
                     </Typography>
</div>
                    {/* </div>
                )}
              /> */}
                  </form>
                )}
              />
              <Typography>
                </Typography>
            </div>
          )
        }}
      </ItemContainer>
         )}
  
         </ViewerContext.Consumer>
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
