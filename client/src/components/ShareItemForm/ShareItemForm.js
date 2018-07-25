import React, { Component } from 'react'
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
  FormControl
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
      disabled: false,
      fileSelected: false,
      selectedTags: [],
      submitted: false
    }
  }

  onSubmit = values => {
    console.log(values)
  }

  validate = values => {
    const errors = {}
    if (!values.itemName) {
      errors.itemName = 'Required'
    }
    if (!values.itemDescription) {
      errors.itemDescription = 'Required'
    }
    // if (!values.itemTags.length === 0){
    //   errors.itemTags = 'Required'
    // }
    // if (values.itemTags.itemTags.length>0) {
      // errors.itemTags = 'Required - Pick at least one'
      // console.log(values.itemTags.itemTags,'hello')
    // }

    // this.setState({selectedTags:tags})
    // const selectedTags = this.state.selectedTags
    // this.setState(...selectedTags, tags)

    // console.log(values)

    return errors
  }

  //WOT iS THIS SUPPOSED TO BE???
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
          `data:${this.state.fileSelected.mimeType};base64, ${btoa(
            e.target.result
          )}`
        )
      }
      reader.readAsBinaryString(this.state.fileSelected)
    })
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
    console.log(this.state.selectedTags, event, 'wot')
    this.setState({
      selectedTags: event.target.value
    })
  }

  generateTagsText(tags, selected) {
    return tags
      .map(t => (selected.indexOf(t.id) > -1 ? t.title : false))
      .filter(e => e)
      .join(', ')
  }
  render() {
    const { classes } = this.props
    const { resetImage, updateNewItem, resetNewItem } = this.props

    return (
      <ItemContainer>
        {({ tagData: { tags, loading, error } }) => {
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
                onSubmit={this.onSubmit}
                validate={this.validate}
                render={({ handleSubmit, pristine, invalid, form, submitting, values }) => (
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
                    <Button
                      variant="contained"
                      className={classes.selectImageButton}
                    >
                      Select an Image
                    </Button>
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

                    {/* <TagMenu /> */}

                    <Typography>Tags (pick at least one!)</Typography>
                    {/* <Grid container>
                
                    {tags && tags.map(tag => (
                      <Grid item xs={6}>
                        

                        <label className={classes.tag}>
                          <Field
                            name="tags"
                            component={Checkbox}
                            type="checkbox"
                            value={tag.title}
                          />
                          <ListItemText primary={tag.title} />
                        </label>
                      </Grid>
                      
                    ))}
                  
              </Grid> */}
                    <FormControl className={classes.tagSelector}>
                      <Field name="tags">
                        {({ input, meta }) => {
                          return (
                            <Select
                              multiple
                              value={this.state.selectedTags}
                              onChange={event => this.handleCheckbox(event)}
                              renderValue={selected => {
                                return this.generateTagsText(tags, selected)
                              }}
                            >
                              {tags &&
                                tags.map(tag => (
                                  console.log(tag.id, tag.title),
                                  <MenuItem key={tag.id} value={tag.id}>
                                    <Checkbox
                                      checked={this.state.selectedTags.indexOf(tag.id) > -1}
                                    />
                                    <ListItemText primary={tag.title} />
                                  </MenuItem>
                                ))}
                            </Select>
                          )
                        }}
                      </Field>
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
    console.log(item)
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
