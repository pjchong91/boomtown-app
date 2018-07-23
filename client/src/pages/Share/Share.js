import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import ShareItemForm from './../../components/ShareItemForm'
import styles from './styles'

const Share = ({ classes }) => {
  return (
    <div>
    
      <ShareItemForm className={classes.shareItemForm}/>

    </div>
  )
}

export default withStyles(styles)(Share)
