import { gql } from "@apollo/client"

export const GET_USERS = gql`
  query getUsers {
    users {
      id
      name
      email
    }
  }
`

export const GET_USER_BY_ID = gql`
  query getUserByID($id: ID!) {
    user(id: $id) {
      id
      name
      email
      password
    }
  }
`



