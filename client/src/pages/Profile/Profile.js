import { withStyles } from '@material-ui/core/styles'
import React from 'react'

import styles from './styles'
import ItemsContainer from '../../containers/ItemsContainer'
import Grid from '@material-ui/core/Grid'
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
  return(
   
  // <h1>Hello {match.params.userid}</h1>
  <ItemsContainer id={match.params.userid}>
  {({ userItemsData: { loading, error, user, viewer } }) => {
    if (loading) return 'Dootdootdoot'
    return (
      
      <AboutUser user={user}/>
      
    
    )
  }}
  </ItemsContainer>
  )
  // return (

  // <ItemsContainer id={match.params.id}>
 

  //       {({ userItemsData: { users, loading, error } }) => {
  //         if (loading) {
  //           return 'Content Loading...'
  //         }
  //         if (error) {
  //           return error
  //         }
          
  //         return users.map(user => (
  //           <div>
  //             {user.fullname}
  //             </div>
  //         ))
  //       }}
  // </ItemsContainer>
 
  // )
}

export default withStyles(styles)(Profile)
