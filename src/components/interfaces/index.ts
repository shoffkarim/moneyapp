export interface ICard {
  id: number;
  name: string;
  icon: string;
  color: string;
  value: number;
  type: string;
  operOpen: Function
}

export interface IMainIcon {
  size: string;
  color: string;
}

export interface IMainIconObj {
  Icon: React.FC<IMainIcon>;
  iconName: string;
}

export interface dndItem {
  id: number,
  type: string
}