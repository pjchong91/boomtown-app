import React, { Component } from 'react'
import { FormSpy, Form, Field } from 'react-final-form'
import TextField from './TextField/TextField'
import TagMenu from './TagMenu/TagMenu'
import {
  Typography,
  Button,
  MenuItem,
  ListItemText,
  Grid
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import ItemContainer from './../../containers/ItemsContainer'
import Checkbox from './../Checkbox/Checkbox'
import styles from './styles'
import { connect } from 'react-redux'
import {
  resetImage,
  updateNewItem,
  resetNewItem
} from './../../redux/modules/shareItemPreview'
// import FormSpy from 'react-final-form'
// import Button from '@material-ui/core/Button';

const onSubmit = values => {
  document.getElementById('texthere').innerHTML = ''
  console.log(values)
  document.getElementById('texthere').innerHTML += `<h1>Topic: ${
    values.topic
  } </h1> <p>StringStuff: ${values.sampleField} </p><p>by ${values.firstName} ${
    values.lastName
  } </p> <p>I have a  ${values.itemName}.${values.itemDescription}</p>`
}

const required = value => (value ? undefined : 'Required')
const isString = value => (typeof value === 'string' ? undefined : 'Needs text')

class ShareForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: true,
      tags: []
    }
  }

  handleChange = event => {
    // this.setState({ name: event.target.value });
    // console.log(itemTags)
  }

  validate = values => {
    const errors = {}
    if (!values.itemName) {
      errors.itemName = 'Required'
    }
    if (!values.itemDescription) {
      errors.itemDescription = 'Required'
    }
    // if (values.itemTags.itemTags.length>0) {
    //   // errors.itemTags = 'Required - Pick at least one'
    //   console.log(values.itemTags.itemTags,'hello')
    // }

    

    console.log(values)

    return errors
  }

  

  render() {
    const { classes } = this.props
    const {resetImage, updateNewItem, resetNewItem} = this.props

    return (
      <div className={classes.root}>
        <Typography className={classes.header}>
          Share. Borrow. Prosper.
        </Typography>

        <Form
          onSubmit={onSubmit}
          validate={this.validate}
          render={({ handleSubmit, pristine, invalid }) => (
            <form onSubmit={handleSubmit}>
              {/* <FormSpy
                    subscription={{ values: true }}
                    component={({ values }) => {
                      if (values) {
                        this.dispatchUpdate(values, tags, updateNewItem)
                      }
                      return ''
                    }}
                  /> */}
              <Button variant="contained" className={classes.selectImageButton}>
                Select an Image
              </Button>
              <div>
                <Field
                  name="itemName"
                  component={TextField}
                  type="text"
                  label="Name Your Item"
                  className={classes.inputName}
                  // validate={required}
                />
              </div>

              <div>
                <Field
                  name="itemDescription"
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
              <Grid container>
                <ItemContainer>
                  {({ tagData: { tags, loading, error } }) => {
                    if (loading) {
                      return <p>Content Loading...</p>
                    }
                    if (error) {
                      return error
                    }

                    return tags.map(tag => (
                      <Grid item xs={6}>
                        {/* <label className={classes.tag} value={tag.title}>
                          <Field
                            name="itemTags"
                            component={Checkbox}
                            // type="checkbox"
                            value={tag.title}
                            // value={'hello jane'}
                            // label={tag.title}
                            onChange={this.handleChange}
                          />

    
                            {' '}
                      
                       <ListItemText primary={tag.title} />
                        
                      {/* </Field> */}

                        {/* </label>                     */}

                        <label className={classes.tag}>
                          <Field
                            name="itemTags"
                            component={Checkbox}
                            type="checkbox"
                            value={tag.title}
                          />{' '}
                          <ListItemText primary={tag.title} />
                        </label>
                      </Grid>
                      // <MenuItem key={tag.title} value={tag.title}>
                      //   <Checkbox
                      //     checked={this.state.name.indexOf(tag.title) > -1}
                      //   />
                      //   <ListItemText primary={tag.title} />
                      // </MenuItem>
                    ))
                  }}
                </ItemContainer>
              </Grid>

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
  // ... other methods
})

export default connect(
  undefined,
  mapDispatchToProps
)(withStyles(styles)(ShareForm))
// export default connect(
//   undefined,
//   mapDispatchToProps
// )(ShareItemPreview /* Or, withStyles(ShareItemPreview)*/);

// export default withStyles(styles)(ShareForm)
