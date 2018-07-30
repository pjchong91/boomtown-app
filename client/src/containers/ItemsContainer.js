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

const itemsData = ({ render }) => (
  <ViewerContext.Consumer>
    {({ viewer }) => (
      <Query query={ALL_ITEMS_QUERY} variables={{ id: viewer.id }}>
        {({ loading, error, data: { items } }) =>
          render({ loading, error, items })
        }
      </Query>
    )}
  </ViewerContext.Consumer>
)

const userItemsData = ({ id, render }) => (
  <ViewerContext.Consumer>
    {({ viewer }) => (
      <Query
        query={ALL_USER_ITEMS_QUERY}
        // variables={{ id: id || viewer.id }}
        // variables={{id: userid || viewer.id}}
        variables={{ id: id }}
      >
        {({ loading, error, data: { user } = {} }) =>
          render({ loading, error, user })
        }
      </Query>
    )}
  </ViewerContext.Consumer>
)

const tagData = ({ render }) => (
  <Query query={ALL_TAGS_QUERY}>
    {({ loading, error, data: { tags } }) => render({ loading, error, tags })}
  </Query>
)

const addItem = ({ render }) => (
  <ViewerContext.Consumer>
    {({ viewer }) => (
      <Mutation
        mutation={ADD_ITEM_MUTATION}
        // variables={{ user: { ...viewer } }}

        refetchQueries={result => [
          { query: ALL_USER_ITEMS_QUERY, variables: { id: viewer.id } }
        ]}
      >
        {(mutation, { data, error, loading }) =>
          render({ mutation, data, error, loading })
        }
      </Mutation>
    )}
  </ViewerContext.Consumer>
)

const ItemsContainer = adopt({
  tagData,
  itemsData,
  userItemsData,
  addItem
  // -------------------------------
})

export default ItemsContainer
