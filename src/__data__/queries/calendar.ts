import { gql } from "@apollo/client"

export const GET_CALENDAR_DATA = gql`
  query getCalendarData($id: ID!, $firstDay: String!, $lastDay: String!) {
    calendarItems(id: $id, firstDay: $firstDay, lastDay: $lastDay) {
      date
      description {
        title
        subTitle
      }
      items {
        id
        title
        backgroundColor
        value
      }
    }
  }
`