import { withStyles } from '@material-ui/core'
import React from 'react'
import styles from './styles'
import ItemsContainer from './../../containers/ItemsContainer'
import ItemCard from './../../components/ItemCard'

//------- MATERIAL UI IMPORT??

const Items = ({ classes }) => {
  return (
    <div>
      <ItemsContainer>
        {({ itemsData: { items, loading, error } }) => {
          if (loading) {
            return 'Content Loading...'
          }
          if (error) {
            return error
          }
          
          return items.map(item => (
           <ItemCard item={item}/>
          ))
        }}
      </ItemsContainer>
    </div>
  )
}

export default withStyles(styles)(Items)
