import { iconsPack } from 'components/iconsPack'
import { IMainIconObj } from 'components/interfaces'

export const icons =  (iconName: string) : IMainIconObj => {
  const icon = iconsPack.find((item) => item.iconName === iconName)
  return icon ? icon : iconsPack[0]
}
