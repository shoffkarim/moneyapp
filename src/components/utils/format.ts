export const formatMoney = (value: number | string | undefined) => {
  if (value) {
    const tempNumber = typeof value === "number" ? value : parseInt(value)
    return new Intl.NumberFormat("ru-RU").format(tempNumber)
  }
  return "0"
}
