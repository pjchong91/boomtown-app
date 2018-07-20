import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import TextField from './TextField/TextField'
import { Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
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
    this.state = {}
  }



  validate = values => {
    console.log(values)
  }

  render() {
    const { classes } = this.props;


    return (
      <div>
        <Typography className={classes.header} >
          Share. Borrow. Prosper.
          </Typography>
          <Form
            onSubmit={onSubmit}
            validate={this.validate}
            render={({ handleSubmit, pristine, invalid }) => (
              <form onSubmit={handleSubmit}>
      
      <Button variant= "contained">Select an Image</Button>
                <div>
                  <Field
                    name="itemName"
                    component={TextField}
                    type="text"
                    label="Name Your Item"
                    validate={required}
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
                    validate={isString}
                  />
                </div>

                <button type="submit">Submit Pls</button>
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
