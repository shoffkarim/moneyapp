import { gql } from "@apollo/client"

export const GET_USER_TRANSACTIONS = gql`
  query getUserCards($id: ID!) {
    user(id: $id) {
      id
      transactions {
        id
        idFrom
        typeFrom
        idTo
        typeTo
        value
        comment
        date
        tags {
          id
          tagId
          name
        }
      }
    }
  }
`
