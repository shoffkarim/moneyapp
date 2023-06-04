import { gql } from '@apollo/client'

export const SET_TOTAL = gql`
  mutation setTotal ($id: ID!, $incomes: Float!, $accounts: Float!, $expenses: Float!){
    setTotal(id: $id, incomes: $incomes, accounts: $accounts, expenses: $expenses) {
      id
      total {
        incomes
        accounts
        expenses
      }
    }
  }
`