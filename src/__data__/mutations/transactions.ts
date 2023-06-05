import { gql } from '@apollo/client'

export const SET_TRANSACTION = gql`
  mutation setTransaction ($id: ID!, $idFrom: ID!, $idTo: ID!, $value: Float!, $comment: String!){
    setTransaction(id: $id, idFrom: $idFrom, idTo: $idTo, value: $value, comment: $comment) {
      id
    }
  }
`
