import React, { useState } from "react"
import { Tag } from "components/interfaces"
import { Control, Controller, ControllerRenderProps } from "react-hook-form"
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

  const handleActiveTag = (item: Tag, field: ControllerRenderProps<TransactionValues, "tags">) => {
    if(activeTags.includes(item.id)) {
      const filteredTags = activeTags.filter((activeItem) => activeItem !== item.id)
      const filteredValue = field.value.filter((activeValue) => activeValue.id !== item.id)
      field.onChange(filteredValue)
      setActiveTags(filteredTags)
    } else {
      field.onChange([
        ...field.value,
        item
      ])
      setActiveTags([...activeTags, item.id])
    }
  }

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
                  active={activeTags.includes(item.id)}
                >
                  <span>{item.text}</span>
                  <TransactionTagsItemStyled
                    onChange={() => {
                      handleActiveTag(item, field)
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
