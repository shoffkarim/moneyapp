import { colorsArray } from "components/constants"

export const themeColor = (colorName: string) : string => {
  const color = colorsArray.find((el: string) => el === colorName)
  return color ? color : colorsArray[0]
}