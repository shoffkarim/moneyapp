// TODO: separate Card and transaction card
export interface ICard {
  id: number;
  name: string;
  icon: string;
  color: string;
  value: number;
  type: string;
  transactionOpen: (
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
  tagId: string,
  name: string
}

export type TransactionData = {
  value: number,
  date: string,
  comment: string,
  tags: Array<Tag | undefined>
}