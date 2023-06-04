import { gql } from "@apollo/client"

export const GET_USER_CARDS = gql`
  query getUserCards($id: ID!) {
    user(id: $id) {
      id
      incomes {
        id
        name
        icon
        color
        value
      }
      accounts {
        id
        name
        icon
        color
        value
      }
      expenses {
        id
        name
        icon
        color
        value
      }
    }
  }
`
