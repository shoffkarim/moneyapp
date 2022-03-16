export const formatMoney = (value: number | string) => {
  if(typeof value === "number") {
    return (new Intl.NumberFormat('ru-RU').format(value))
  } else {
    let tempNumber = parseInt(value)
    return (new Intl.NumberFormat('ru-RU').format(tempNumber))
  }
}