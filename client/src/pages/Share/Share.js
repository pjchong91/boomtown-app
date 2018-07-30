import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import ShareItemForm from './../../components/ShareItemForm'
import ShareCard from './../../components/ShareCard'
import styles from './styles'
import PropTypes from 'prop-types'


const Share = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.shareCard}>
        <ShareCard />
      </div>
      <ShareItemForm />
    </div>
  )
}

Share.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Share)
