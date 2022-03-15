import { iconsPack } from 'components/iconsPack';

export const icons = (icon: string) => {
  for (const key in iconsPack) {
    if(key === icon) {
      return iconsPack[key]
    }
  }
  return iconsPack[0]
}