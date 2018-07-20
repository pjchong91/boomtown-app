import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import ShareItemForm from './../../components/ShareItemForm'
import styles from './styles'

const Share = ({ classes }) => {
  return (
    <div>
      <p>
        This is the share page located at <code>/share</code>.
      </p>
      <ShareItemForm />

    </div>
  )
}

export default withStyles(styles)(Share)
