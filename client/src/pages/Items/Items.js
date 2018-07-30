import { withStyles } from '@material-ui/core'
import React from 'react'
import styles from './styles'
import ItemsContainer from './../../containers/ItemsContainer'
import ItemCard from './../../components/ItemCard'
import Grid from '@material-ui/core/Grid'
import LoadingPage from './../../components/LoadingPage'
import PropTypes from 'prop-types'

const Items = ({ classes }) => {
  return (
    <div>
      <Grid container align="center" justify="center" className={classes.root}>
        <ItemsContainer>
          {({ itemsData: { items, loading, error } }) => {
            if (loading) {
              return <LoadingPage />
            }
            if (error) {
              return error
            }

            return items.map(item => (
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
            ))
          }}
        </ItemsContainer>
      </Grid>
    </div>
  )
}

Items.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Items)
