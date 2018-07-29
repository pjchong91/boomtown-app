import gql from 'graphql-tag'

/**
 * Item and user-related queries and mutations.
 */

const ItemFields = gql`
  fragment ItemFields on Item {
    id
    title
    imageurl
    description
    created
    tags {
      id
      title
    }
    itemowner {
      id
      fullname
      email
      bio
    }
    borrower {
      id
      fullname
      email
      bio
    }
    #
    # See the Apollo docs for instructions on how to use fragments:
    # https://www.apollographql.com/docs/angular/features/fragments.html
  }
`
//This query is showing ALL items
export const ITEM_QUERY = gql`
  query {
    items {
      # @TODO: Query an item by its id and return the ItemFields fragment.
      ...ItemFields
    }
  }
  ${ItemFields}
`
// This query shows items not owned by filtered id and not currently borrowed
export const ALL_ITEMS_QUERY = gql`
  query items($id: ID) {
    items(filter: $id) {
      ...ItemFields
    }
  }
  ${ItemFields}
`

export const ALL_USER_ITEMS_QUERY = gql`
  query($id: ID!) {
    user(id: $id) {
      fullname
      email
      bio
      items {
        ...ItemFields
      }
      borrowed {
        ...ItemFields
      }
    }
  }
  # query user($id: ID!) {
  # @TODO: Query the bio, email, fullname, items, and borrowed for the user by id
  # Use the ItemFields fragment for the items and borrowed fields.
  #}
  ${ItemFields}
`

export const ALL_TAGS_QUERY = gql`
  query {
    tags {
      id
      title
    }
  }
`

export const ADD_ITEM_MUTATION = gql`
  # @TODO: Pass the item and image into the addItem mutation as arguments
  # and return the new item id when the mutation is complete.

  mutation addItem($item: NewItemInput!, $image: Upload) {
    addItem(item: $item, image: $image) {
      id
    }
  }
`

// /**
//  * Auth-related queries and mutations.
//  */

export const VIEWER_QUERY = gql`
  query {
    # @TODO: Query the id, email, fullname, and bio fields for the viewer.
    viewer{
      id
      email
      fullname
      bio
    }
  }
`
export const LOGOUT_MUTATION = gql`
  mutation {
    # @TODO: Run the logout mutation.
    
      logout
    
  }
`

export const SIGNUP_MUTATION = gql`
  mutation signup($user: SignupInput!) {
    # @TODO: Pass the user into the signup mutation as an argument
    # and return the id of the new user when the mutation is complete.
    signup(user: $user){
      id
    }
  }
`

export const LOGIN_MUTATION = gql`
  mutation login($user: LoginInput!) {
    # @TODO: Pass the user into the login mutation as an argument
    # and return the id of the new user when the mutation is complete.
    login(user:$user)
      
    
  }
`
