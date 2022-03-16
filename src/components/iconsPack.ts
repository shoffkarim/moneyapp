import { BsBank, BsCashCoin } from "react-icons/bs"
const bank = BsBank
const cash = BsCashCoin

interface IObjectKeys {
  [key: string]: React.FC;
}

export const iconsPack: IObjectKeys = {
  bank,
  cash
}

export const iconsPackArray = [
  {
    iconName: "bank",
    Icon: bank,
  },
  {
    iconName: "cash",
    Icon: cash,
  },
]