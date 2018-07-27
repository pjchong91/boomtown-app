import { adopt } from 'react-adopt'
import { Query, Mutation } from 'react-apollo'
import React from 'react'
import { ViewerContext } from '../context/ViewerProvider'
// -------------------------------

import {
  ALL_TAGS_QUERY,
  ALL_ITEMS_QUERY,
  ADD_ITEM_MUTATION,
  ALL_USER_ITEMS_QUERY
} from '../apollo/queries'

const itemsData = ({ render }) => 
  /**
   * @TODO: Use Apollo's <Query /> component to fetch all the items.
   *
   * Note: Your query will need to filter out borrowed items.
   *
   * The final query will ultimately filter out items that belong to the
   * currently logged-in user once you have added authentication.
   */

 (
    <ViewerContext.Consumer>
      {({viewer})=>(
        <Query query={ALL_ITEMS_QUERY} variables={{ id: viewer.id }}>
        {({ loading, error, data: { items } }) =>
          render({ loading, error, items })
        }
      </Query>
      )}
      
    </ViewerContext.Consumer>
  )
  // return undefined


const userItemsData = ({ userId, render }) => 
  (
  <ViewerContext.Consumer>
    {({viewer}) => (
      <Query query={ALL_USER_ITEMS_QUERY} variables={{ id: userId || viewer.id }}>
    {({ loading, error, data: { users } }) =>
      render({ loading, error, users })
    }
  </Query>
    )}
  
</ViewerContext.Consumer>
)
  /**
   * @TODO: Use Apollo's <Query /> component to fetch all of a user's items.
   *
   * Note: Your query will need to retrieve only items that belong to a
   * specific user id.
   */
 




const tagData = ({ render }) => 
  /**
   * @TODO: Use Apollo's <Query /> component to fetch all the tags.
   */
(
    <Query query={ALL_TAGS_QUERY}>
      {({ loading, error, data: { tags } }) => render({ loading, error, tags })}
    </Query>
  )
  // return undefined


const addItem = ({ render }) => (
 
    <ViewerContext.Consumer>
    {({viewer})=> (
      <Mutation mutation={ADD_ITEM_MUTATION}
      refetchQueries={() => [{query: ALL_USER_ITEMS_QUERY, variables: {id: viewer.id}}]}
      >
      {(mutation, {data,error,loading})=> render({mutation, data, error, loading})}
      </Mutation>
    )}
    </ViewerContext.Consumer>
 
 
)

  ;
   
   
/**
 * @TODO: Use Apollo's <Mutation /> component to use the signup mutation.
 *
 * Note: Be sure to use `refetchQueries` to refresh Apollo's cache with the
 * latest items for the user.
 */

const ItemsContainer = adopt({
  // @TODO: Uncomment each line as you write the corresponding query.
  tagData,
  itemsData,
  userItemsData,
  addItem
  // -------------------------------
})

export default ItemsContainer
