// TODO: separate Card and transaction card
export interface ICard {
  id: number | string;
  name: string;
  icon: string;
  color: string;
  value: number;
  type: string;
  transactionOpen?: (
    open: boolean,
    idFrom: number | string,
    idWhere: number | string,
    typeFrom: string,
    typeWhere: string
  ) => void
}

export interface ICardDND {
  id: number | string;
  name: string;
  icon: string;
  color: string;
  value: number;
  type: string;
  transactionOpen: (
    open: boolean,
    idFrom: number | string,
    idWhere: number | string,
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
  tagId: string,
  name: string
}

export type TransactionData = {
  value: number,
  date: string,
  comment: string,
  tags: Array<Tag | undefined>
}