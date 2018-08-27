import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import { Form, Field } from 'react-final-form'
import AuthContainer from '../../containers/AuthContainer'
import styles from './styles'

class AccountForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formToggle: true,
      disabled: true,
      errorMessage: ''
    }
  }

  //TODO: Password visibility toggle
  // handlePasswordToggle() {
  //   var x = document.getElementById('password')
  //   if (x.type === 'password') {
  //     x.type = 'text'
  //     // this.setState({toggleIcon:'far fa-eye-slash'})
  //   } else {
  //     x.type = 'password'
  //     // this.setState({toggleIcon:'far fa-eye'})
  //   }
  // }

  validate = values => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Required'
    }
    if (!values.password) {
      errors.password = 'Required'
    }
    if (!this.state.formToggle && !values.fullname) {
      errors.fullname = 'Required'
    }

    return errors
  }

  render() {
    const { classes } = this.props
    const required = value => (value ? undefined : 'Required')

    return (
      <AuthContainer>
        {({ signup, login, data, loading, error }) => {
          // if (error) {
          //   return 'wotfok'
          // }
          return (
            <Form
              onSubmit={
                this.state.formToggle
                  ? values => {
                      return login.mutation({
                        variables: {
                          user: values
                        }
                      })

                      //TODO: Retrieve and display login errors
                    }
                  : values => {
                      signup.mutation({
                        variables: {
                          user: values
                        }
                      })
                      //TODO: Retrieve and display signup errors
                    }
              }
              validate={this.validate}
              render={({ handleSubmit, pristine, invalid, values }) => (
                <form onSubmit={handleSubmit} className={classes.accountForm}>
                  {!this.state.formToggle && (
                    <FormControl fullWidth className={classes.formControl}>
                      <InputLabel
                        htmlFor="fullname"
                        className={classes.loginLabel}
                      >
                        Username
                      </InputLabel>
                      <Field name="fullname" validate={required}>
                        {({ input, meta }) => (
                          <div>
                            <Input id="fullname" type="text" {...input} />
                            {meta.error &&
                              meta.touched && <span>{meta.error}</span>}
                          </div>
                        )}
                      </Field>
                    </FormControl>
                  )}
                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="email" className={classes.loginLabel}>
                      Email
                    </InputLabel>
                    <Field name="email" validate={required}>
                      {({ input, meta }) => (
                        <div>
                          <Input id="email" type="text" {...input} />
                          {meta.error &&
                            meta.touched && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                  </FormControl>
                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel
                      htmlFor="password"
                      className={classes.loginLabel}
                    >
                      Password
                    </InputLabel>
                    <Field name="password" validate={required}>
                      {({ input, meta }) => (
                        <div>
                          <Input id="password" type="password" {...input} />

                          {/*TODO: Implement password visibility toggle
                            <Icon id="passwordToggle" 
                            className={classNames(classes.icon, `${this.state.toggleIcon}`)} 
                            onClick={()=>this.handlePasswordToggle()} />

                            <Input
                              id="passwordToggle"
                              type="checkbox"
                              onClick={() => this.handlePasswordToggle()}
                            /> 
                         */}

                          {meta.error &&
                            meta.touched && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                    >
                      <Button
                        type="submit"
                        className={classes.formButton}
                        variant="contained"
                        size="large"
                        color="secondary"
                        disabled={pristine || invalid}
                      >
                        {this.state.formToggle ? 'Enter' : 'Create Account'}
                      </Button>
                      <Typography>
                        <button
                          className={classes.formToggle}
                          type="button"
                          onClick={() => {
                            // @TODO: Reset the form on submit - Necessary? User moved to items on successful login
                            this.setState({
                              formToggle: !this.state.formToggle
                            })
                          }}
                        >
                          {this.state.formToggle
                            ? 'Create an account.'
                            : 'Login to existing account.'}
                        </button>
                      </Typography>
                    </Grid>
                  </FormControl>
                  <Typography className={classes.errorMessage}>
                    {/* @TODO: Display sign-up and login errors */}
                    {login.error
                      ? 'User Authentication Error: Incorrect username or password'
                      : ''}
                    {signup.error
                      ? 'User Creation Error: Incorrect username or password'
                      : ''}
                    {this.state.errorMessage}
                  </Typography>
                </form>
              )}
            />
          )
        }}
      </AuthContainer>
    )
  }
}

export default withStyles(styles)(AccountForm)
