export const formatMoney = (value: number | string) => {
  let tempNumber = typeof value === "number" ? value : parseInt(value);
  return new Intl.NumberFormat("ru-RU").format(tempNumber);
};
