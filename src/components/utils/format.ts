export const formatMoney = (number: number) => {
  return (new Intl.NumberFormat('ru-RU').format(number))
}