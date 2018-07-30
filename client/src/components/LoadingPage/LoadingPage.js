import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import styles from './styles'

const LoadingPage = ({ classes }) => (
  <div className={classes.root}>
    <CircularProgress className={classes.progress} size={50} color="primary" />
  </div>
)

LoadingPage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LoadingPage)
