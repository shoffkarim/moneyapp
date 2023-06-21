import { Tag } from "types"

export type TransactionValues = {
  value: string,
  date: Date,
  comment: string,
  tags: Array<Tag>
}