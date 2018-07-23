import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import TextField from './TextField/TextField'
import TagMenu from './TagMenu/TagMenu'
import { Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
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
      disabled: true
    }
  }

  validate = values => {
    const errors = {}
    if (!values.itemName) {
      errors.itemName = 'Required'
    }
    if (!values.itemDescription) {
      errors.itemDescription = 'Required'
    }

    console.log(values)

    return errors
  }

  render() {
    const { classes } = this.props

    return (
      <div>
        <Typography className={classes.header}>
          Share. Borrow. Prosper.
        </Typography>
        <Form
          onSubmit={onSubmit}
          validate={this.validate}
          render={({ handleSubmit, pristine, invalid }) => (
            <form onSubmit={handleSubmit}>
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

              <TagMenu />

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

export default withStyles(styles)(ShareForm)
