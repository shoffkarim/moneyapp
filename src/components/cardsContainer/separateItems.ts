import { ICard } from "types"

export const separateItems = (items: Array<ICard>, size: number): Array<Array<ICard>> => {
  const length = items.length
  const handledArray = []
  for (let i = 0; i < length; i+= size) {
    handledArray.push(items.slice(i, i + size))
  }
  return handledArray
}