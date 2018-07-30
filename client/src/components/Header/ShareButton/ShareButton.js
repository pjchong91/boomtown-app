import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import styles from './styles'

function ShareButton(props) {
  const { classes } = props
  return (
    <div>
      <Button
        variant="extendedFab"
        aria-label="Delete"
        className={classes.button}
      >
        <AddIcon className={classes.addButton} />
        Share Something
      </Button>
    </div>
  )
}

ShareButton.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ShareButton)
