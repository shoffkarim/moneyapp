import { gql } from "@apollo/client"

export const GET_USER_TRANSACTIONS = gql`
  query getUserTransactions($id: ID!) {
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

export const GET_TRANSACTIONS_CALENDAR = gql`
  query getTransactionsCalendar($id: ID!, $firstDay: String!, $lastDay: String!) {
    transactions(id: $id, firstDay: $firstDay, lastDay: $lastDay) {
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
`