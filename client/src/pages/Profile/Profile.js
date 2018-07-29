import { withStyles } from '@material-ui/core/styles'
import React from 'react'

import styles from './styles'
import ItemsContainer from '../../containers/ItemsContainer'
import { Grid, Typography } from '@material-ui/core'
import ItemCard from './../../components/ItemCard'
import { ViewerContext } from '../../context/ViewerProvider'
import { Query, Mutation } from 'react-apollo'

import AboutUser from './../../components/AboutUser'

import {
  ALL_TAGS_QUERY,
  ALL_ITEMS_QUERY,
  ADD_ITEM_MUTATION,
  ALL_USER_ITEMS_QUERY
} from '../../apollo/queries'

const Profile = ({ classes, match, props }) => {
  console.log('hello')
  return (
    // <h1>Hello {match.params.userid}</h1>
    <ItemsContainer id={match.params.userid}>
    {/* <ItemsContainer id='26'> */}
      {({ userItemsData: { loading, error, user, viewer } }) => {
        if (loading) return 'Dootdootdoot'
        console.log(user.items)
        return (
          <Grid container className={classes.root}>
            <AboutUser user={user}  />
            <Typography
              variant="display1"
              component="h3"
              className={classes.itemHeader}
            >
              Shared Items
            </Typography>
            <Grid container >
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

export default withStyles(styles)(Profile)
