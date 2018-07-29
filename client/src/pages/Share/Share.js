import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import ShareItemForm from './../../components/ShareItemForm'
import ShareCard from './../../components/ShareCard'
import styles from './styles'

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

export default withStyles(styles)(Share)
