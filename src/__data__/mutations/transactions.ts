import { gql } from '@apollo/client'


export const SET_TRANSACTION = gql`
  mutation setTransaction ($id: ID!, $idFrom: ID!, $idTo: ID!, $typeFrom: String!, $typeTo: String!, $value: Float!, $comment: String!, $date: String!, $tags: [TagInput]!){
    setTransaction(id: $id, idFrom: $idFrom, idTo: $idTo, typeFrom: $typeFrom, typeTo: $typeTo, value: $value, comment: $comment, date: $date, tags: $tags) {
      id
    }
  }
`
