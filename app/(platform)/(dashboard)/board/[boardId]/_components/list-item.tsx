import { ListWithCards } from "@/types"

interface ListItemProps {
  data: ListWithCards;
  index: number
}

export const ListItem = ({data, index}: ListItemProps) => {
  return (
    <div>ListItem</div>
  )
}
