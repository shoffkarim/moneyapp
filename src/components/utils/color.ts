import { colors } from "components/constants"

export const themeColor = (color: string) => {
  for (const key in colors) {
    if(key === color) {
      return colors[key]
    }
  }
  return colors[0]
}