import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import styles from './styles'
import ItemsContainer from '../../containers/ItemsContainer'
import { Grid, Typography } from '@material-ui/core'
import ItemCard from './../../components/ItemCard'
import LoadingPage from './../../components/LoadingPage'
import AboutUser from './../../components/AboutUser'
import PropTypes from 'prop-types'

const Profile = ({ classes, match }) => {
  return (
    <ItemsContainer id={match.params.userid}>
      {({ userItemsData: { loading, error, user, viewer } }) => {
        if (loading) return <LoadingPage />
        return (
          <Grid container className={classes.root}>
            <AboutUser user={user} />
            <Typography
              variant="display1"
              component="h3"
              className={classes.itemHeader}
            >
              Shared Items
            </Typography>
            <Grid container>
              {user.items.map(item => (
                <Grid
                  item
                  key={item.id}
                  xs={12}
                  md={6}
                  lg={4}
                  className={classes.itemCard}
                >
                  <ItemCard item={item} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        )
      }}
    </ItemsContainer>
  )
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default withStyles(styles)(Profile)
