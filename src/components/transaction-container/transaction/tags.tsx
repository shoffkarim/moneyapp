import { Tag } from "components/interfaces"
import React, { useState } from "react"
import { TransactionTagsItemStyled, TransactionTagsStyled, TransactionWrapperStyled } from "./transaction.styled"

const TagsData: Array<Tag> = [
  {
    id: "1",
    text: "Business lunch"
  },
  {
    id: "2",
    text: "Bank"
  },
  {
    id: "3",
    text: "Coffee"
  }
]

interface TagsProps {
  handlerTransaction: (tags: Array<Tag | undefined>) => void
}

export const Tags: React.FC<TagsProps> = ({ handlerTransaction }) => {
  const [activeTags, setActiveTags] = useState<Array<Tag | undefined>>([])

  const handlerActiveTags = (item: Tag) => {
    const index = activeTags.findIndex((el) => el?.id === item.id)
    if(index !== -1) {
      const tempTags = activeTags.filter((el) => el?.id !== item.id)
      setActiveTags(tempTags)
      handlerTransaction(tempTags)
    } else {
      setActiveTags([...activeTags, item])
      handlerTransaction([...activeTags, item])
    }

  }

  return (
    <TransactionWrapperStyled>
      <TransactionTagsStyled>
        {TagsData && TagsData.map((item) =>
          <TransactionTagsItemStyled
            key={item.id}
            onClick={() => handlerActiveTags(item)}
            active={activeTags.find((el) => el?.id === item.id)}
          >
            <span>{item.text}</span>
          </TransactionTagsItemStyled>
        )}
      </TransactionTagsStyled>
    </TransactionWrapperStyled>
  )
}
