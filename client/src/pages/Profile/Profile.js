import { withStyles } from '@material-ui/core/styles'
import React from 'react'

import styles from './styles'

const Profile = ({ classes, match }) => {
  return (
    <div>
      <p>
        {/* ItemsContainer userId={this.props.match.params.userId} <--  */}

        This is the profile page located at <code>/profile/:userId</code>
      <h1>Hello User {match.params.id}</h1>      </p>
    </div>
  )
}

export default withStyles(styles)(Profile)
