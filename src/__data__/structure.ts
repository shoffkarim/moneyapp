export type data = {
  user: {
    id: string
    name: string
    email: string
    image?: string
    createdDate: string
    updatedDate: string
  },
  settings: {
    currency: string
    theme: string
  }
  total: {
    expenses: number
    income: number
    balance: number
    updatedDate: string
  }
  main: {
    incomes: {
      id: string
      name: string
      icon: string
      color: string
      value: number
      createdDate: string
      updatedDate: string
    }
    accounts: {
      id: string
      name: string
      icon: string
      color: string
      value: number
      createdDate: string
      updatedDate: string
    }
    expenses: {
      id: string
      name: string
      icon: string
      color: string
      value: number
      createdDate: string
      updatedDate: string
    }
  },
  transactions: [
    {
      id: string
      value: number
      createdDate: string
      updatedDate: string
      idFrom: string
      typeFrom: string
      idWhere: string
      typeWhere: string
      comment?: string
      tags?: [
        {
          id: string
          text: string
        }
      ]
    }
  ]
  tags: [
    {
      id: string
      text: string
    }
  ]
}