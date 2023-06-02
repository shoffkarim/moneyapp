import { gql } from "@apollo/client"

export const GET_USER_TOTAL = gql`
  query getUserTotal($id: ID!) {
    user(id: $id) {
      id
      total {
        incomes
        accounts
        expenses
      }
    }
  }
`