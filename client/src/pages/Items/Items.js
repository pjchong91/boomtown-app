import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import styles from './styles'
import ItemsContainer from './../../containers/ItemsContainer'

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
          return items.map(item => <li>{item.title}</li>)
        }}
      </ItemsContainer> 


           <ItemsContainer>
           {({ tagData: { tags, loading, error } }) => {
             if (loading) {
               return 'Content Loading...'
             }
             if (error) {
               return error
             }
             return tags.map(tag => <p>{tag.title}</p>)
           }}
         </ItemsContainer> 
         </div>
  )
}

export default withStyles(styles)(Items)


