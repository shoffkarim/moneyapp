import React, { useState } from "react"
import { Tag } from "components/interfaces"
import { Control, Controller } from "react-hook-form"
import { TransactionsTagsLabelStyled, TransactionTagsItemStyled, TransactionTagsStyled, TransactionWrapperStyled } from "./transaction.styled"
import { TransactionValues } from "./utils"

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
  // vendor library
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<TransactionValues, any>
}

export const Tags: React.FC<TagsProps> = ({ control }) => {

  const [activeTags, setActiveTags] = useState<Array<string>>([])
  console.log(activeTags)
  return (
    <TransactionWrapperStyled>
      <TransactionTagsStyled>
        <Controller
          name="tags"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <>
              {TagsData.map((item) =>
                <TransactionsTagsLabelStyled
                  key={item.id}
                  active={activeTags.includes(item.id )}
                >
                  <span>{item.text}</span>
                  <TransactionTagsItemStyled
                    onChange={(checked) => {
                      if(checked) {
                        field.onChange([
                          ...field.value,
                          item
                        ]),
                        setActiveTags([...activeTags, item.id])
                      }
                    }}
                    type="checkbox"
                    value={item.text}
                  >
                  </TransactionTagsItemStyled>
                </TransactionsTagsLabelStyled>
              )}
            </>
          )}
        />
      </TransactionTagsStyled>
    </TransactionWrapperStyled>
  )
}
