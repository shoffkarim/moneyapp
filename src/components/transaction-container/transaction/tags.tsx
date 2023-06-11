import React, { useState } from "react"
import { Tag } from "components/interfaces"
import { Control, Controller, ControllerRenderProps } from "react-hook-form"
import { TransactionsTagsLabelStyled, TransactionTagsItemStyled, TransactionTagsStyled, TransactionWrapperStyled } from "./transaction.styled"
import { TransactionValues } from "./utils"

const TagsData: Array<Tag> = [
  {
    tagId: "1",
    name: "Business lunch"
  },
  {
    tagId: "2",
    name: "Bank"
  },
  {
    tagId: "3",
    name: "Coffee"
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
    if(activeTags.includes(item.tagId)) {
      const filteredTags = activeTags.filter((activeItem) => activeItem !== item.tagId)
      const filteredValue = field.value.filter((activeValue) => activeValue.tagId !== item.tagId)
      field.onChange(filteredValue)
      setActiveTags(filteredTags)
    } else {
      field.onChange([
        ...field.value,
        item
      ])
      setActiveTags([...activeTags, item.tagId])
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
                  key={item.tagId}
                  active={activeTags.includes(item.tagId)}
                >
                  <span>{item.name}</span>
                  <TransactionTagsItemStyled
                    onChange={() => {
                      handleActiveTag(item, field)
                    }}
                    type="checkbox"
                    value={item.name}
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
