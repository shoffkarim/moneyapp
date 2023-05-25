import React from "react"
import { useDrop } from "react-dnd"
import { dndCanDrop } from "components/utils/dnd"
import { dndItem, ICard } from "components/interfaces"
import { Card } from "./card"

export const CardDropWrapper: React.FC<ICard> = ({
  id,
  name,
  icon,
  color,
  value,
  type,
  operOpen,
}) => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: "card",
    canDrop: (item: dndItem) => dndCanDrop(item, id, type),
    drop: (item: dndItem) => operOpen(true, item.id, id, item.type, type),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))


  let styleOpacity = 1
  const isActive = isOver && canDrop
  if (isActive) {
    styleOpacity = 1
  } else if (isOver && !canDrop) {
    styleOpacity = 0.4
  }
  return (
    <div ref={drop} style={{ opacity: styleOpacity }}>
      <Card
        id={id}
        name={name}
        icon={icon}
        color={color}
        value={value}
        type={type}
        operOpen={operOpen}
      />
    </div>
  )
}
