import classNames from "classnames";
import { Tag } from "components/interfaces";
import React, { useState } from "react";

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

export const Tags: React.FC<TagsProps> = ({handlerTransaction}) => {
  const [activeTags, setActiveTags] = useState<Array<Tag | undefined>>([])

  const handlerActiveTags = (item: Tag) => {
    const index = activeTags.findIndex((el) => el?.id === item.id)
    if(index !== -1) {
      let tempTags = activeTags.filter((el) => el!.id !== item.id)
      setActiveTags(tempTags)
      handlerTransaction(tempTags)
    } else {
      setActiveTags([...activeTags, item])
      handlerTransaction([...activeTags, item])
    }

  }

  return (
    <div className="transaction-wrapper">
      <ul className="transaction-tags">
        {TagsData && TagsData.map((item) =>
          <li
            key={item.id}
            onClick={() => handlerActiveTags(item)}
            className={classNames("transaction-tags__item",
              activeTags.find((el) => el?.id === item.id) ? "transaction-tags__item_active" : "")}
            >
            <span>{item.text}</span>
          </li>
        )}
      </ul>
    </div>
  );
};
