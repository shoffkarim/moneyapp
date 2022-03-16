import { iconsPack } from 'components/iconsPack';

export const icons = (icon: string) => {
  for (const key in iconsPack) {
    if(key === icon) {
      return {
        Icon: iconsPack[key],
        iconName: key
      }
    }
  }
  return {
    Icon: iconsPack[0],
    iconName: "bank"
  }
}
