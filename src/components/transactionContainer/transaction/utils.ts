import { Tag } from "components/interfaces"

export type TransactionValues = {
  value: string,
  date: Date,
  comment: string,
  tags: Array<Tag>
}