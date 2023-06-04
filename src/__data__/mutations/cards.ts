import { gql } from '@apollo/client'

export const SET_INCOME = gql`
  mutation setIncome ($id: ID!, $name: String!, $icon: String!, $color: String!, $value: Float!){
    setIncome(id: $id, name: $name, icon: $icon, color: $color, value: $value) {
      id
      name
      incomes {
        id
        name
        icon
        color
        value
      }
    }
  }
`

export const SET_ACCOUNT = gql`
  mutation setAccount ($id: ID!, $name: String!, $icon: String!, $color: String!, $value: Float!){
    setAccount(id: $id, name: $name, icon: $icon, color: $color, value: $value) {
      id
      name
      incomes {
        id
        name
        icon
        color
        value
      }
    }
  }
`

export const SET_EXPENSE = gql`
  mutation setExpense ($id: ID!, $name: String!, $icon: String!, $color: String!, $value: Float!){
    setExpense(id: $id, name: $name, icon: $icon, color: $color, value: $value) {
      id
      name
      incomes {
        id
        name
        icon
        color
        value
      }
    }
  }
`
