export interface ICard {
  id: number;
  name: string;
  icon: string;
  color: string;
  value: number;
  type: string;
  operOpen: (
    open: boolean,
    idFrom: number,
    idWhere: number,
    typeFrom: string,
    typeWhere: string
  ) => void
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

export type Tag = {
  id: string,
  text: string
}

export type TransactionData = {
  value: number,
  date: string,
  comment: string,
  tags: Array<Tag | undefined>
}