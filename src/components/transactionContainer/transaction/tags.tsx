import React, { useState } from "react"
import { Tag } from "types"
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
  defaultValue: Array<Tag>
}

export const Tags: React.FC<TagsProps> = ({ control, defaultValue }) => {

  const [activeTags, setActiveTags] = useState<Array<Tag>>(defaultValue)


  const handleActiveTag = (item: Tag, field: ControllerRenderProps<TransactionValues, "tags">) => {
    if(activeTags.find((activeItem) => item.tagId === activeItem.tagId)) {
      const filteredTags = activeTags.filter((activeItem) => activeItem.tagId !== item.tagId)
      const filteredValue = field.value.filter((activeValue) => activeValue.tagId !== item.tagId)
      field.onChange(filteredValue)
      setActiveTags(filteredTags)
    } else {
      field.onChange([
        ...field.value,
        { tagId: item.tagId, name: item.name }
      ])
      setActiveTags([...activeTags, item])

    }
  }

  return (
    <TransactionWrapperStyled>
      <TransactionTagsStyled>
        <Controller
          name="tags"
          control={control}
          defaultValue={defaultValue}
          render={({ field }) => (
            <>
              {TagsData.map((item) =>
                <TransactionsTagsLabelStyled
                  key={item.tagId}
                  active={Boolean(activeTags.find((activeItem) => item.tagId === activeItem.tagId))}
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
