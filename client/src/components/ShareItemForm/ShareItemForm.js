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
  FormControl,
  FormHelperText, InputLabel,Input
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
      submitted: false
    }
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

    // if (values.itemTags.itemTags.length>0) {
    //   errors.itemTags = 'Required - Pick at least one'
    //   console.log(values.itemTags.itemTags,'hello')
    // }

    // this.setState({selectedTags:tags})
    // const selectedTags = this.state.selectedTags
    // this.setState(...selectedTags, tags)

    // console.log(values.tags)

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
  // validateTags (){
  //   console.log(this.state.selectedTags,'validates')
  // }

  handleCheckbox(event) {
    const errors = {}
    this.setState({
      selectedTags: event.target.value
    })

    const minimumOne = event.target.value.length 

    if (minimumOne === 0){
     
      this.setState({tagError:true})
    } else this.setState({tagError:false})
  
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

                    {/* <Typography className={classes.tagsPicker}>Tags</Typography> */}
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
                    <FormControl id='tagSelector' className={classes.tagSelector} error={this.state.tagError}>
                      <Field name="tags" >
                        {({ input, meta }) => {
                          return (
                            <div>
                                      <InputLabel htmlFor="select-multiple-checkbox" >Tags - Please select at least one</InputLabel>

                            <Select
                              multiple
                              value={this.state.selectedTags}
                              onChange={event => this.handleCheckbox(event)}
                              error={this.state.tagError}
                              input={<Input id="select-multiple-checkbox" className={classes.tagInputLabel} />}

                              renderValue={selected => {
                                return (
                                  this.generateTagsText(tags, selected)
                                )
                              }}
                            >
                              {tags &&
                                tags.map(tag => (
                                  <MenuItem key={tag.id} value={tag.id}>
                                    <Checkbox
                                      checked={this.state.selectedTags.indexOf(tag.id) > -1}
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
