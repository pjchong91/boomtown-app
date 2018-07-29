import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import styles from './styles'
import Gravatar from 'react-gravatar'





const AboutUser= ({ classes, user }) => (
  
    
      <Card className={classes.root} elevation={1}>
        
        <CardHeader className={classes.userDetails}>
            <Gravatar className={classes.avatar} email={user.email} />

            <Typography variant="display2" component="h3">
            {user.fullname}
            </Typography>
        </CardHeader>
        
        <CardContent className={classes.userItemSummary}>
            </CardContent>



        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Card>
   

)

AboutUser.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutUser);