import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Card, CardContent, CardHeader } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import styles from './styles'
import Gravatar from 'react-gravatar'

const AboutUser = ({ classes, user }) => (
  <Card className={classes.root}>
    <CardHeader
      className={classes.userDetails}
      avatar={<Gravatar className={classes.avatar} email={user.email} />}
      title={
        <Typography variant="display2" component="h3">
          {user.fullname}
        </Typography>
      }
    />

    <CardContent className= {classes.itemDetails}>
        <Typography component="p" className={classes.profileText}>
             <strong>{user.items.length} </strong> 
             {user.items.length === 1 ? 'Item Shared  ' : 'Items Shared  '} 
             <strong>{user.borrowed.length}</strong>
                 {user.borrowed.length === 1 ? ' Item Borrowed' : ' Items Borrowed'}
        </Typography>

        <Typography component="p" className={classes.profileText}>
              {user.bio}
        </Typography>
    </CardContent>
  </Card>
)

AboutUser.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AboutUser)
