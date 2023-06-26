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

export const UPDATE_ACCOUNT = gql`
  mutation updateAccount ($id: ID!, $idCard: ID!, $name: String!, $icon: String!, $color: String!, $value: Float!){
    updateAccount(id: $id, idCard: $idCard, name: $name, icon: $icon, color: $color, value: $value) {
      id
    }
  }
`

export const UPDATE_INCOME = gql`
  mutation updateIncome ($id: ID!, $idCard: ID!, $name: String!, $icon: String!, $color: String!, $value: Float!){
    updateIncome(id: $id, idCard: $idCard, name: $name, icon: $icon, color: $color, value: $value) {
      id
    }
  }
`

export const UPDATE_EXPENSE = gql`
  mutation updateExpense ($id: ID!, $idCard: ID!, $name: String!, $icon: String!, $color: String!, $value: Float!){
    updateExpense(id: $id, idCard: $idCard, name: $name, icon: $icon, color: $color, value: $value) {
      id
    }
  }
`