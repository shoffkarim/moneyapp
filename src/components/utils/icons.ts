import { iconsPack } from 'components/iconsPack';

export const icons =  (iconName: string) => {
  let icon = iconsPack[0]
  iconsPack.forEach((item) => {
    if (item.iconName === iconName) {
      icon = item
    }
  })
  return icon
}
