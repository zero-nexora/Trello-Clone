import { ListWithCards } from "@/types";
import { Draggable } from "@hello-pangea/dnd";
import { ElementRef, useRef, useState } from "react";

interface ListItemProps {
  data: ListWithCards;
  index: number;
}

export const ListItem = ({ data, index }: ListItemProps) => {
  const textareaRef = useRef<ElementRef<"textarea">>(null);
  const [isEditing, setIsEditing] = useState(false);

  const disableEditing = () => {
    setIsEditing(false);
  };

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      textareaRef.current?.focus();
      textareaRef.current?.select();
    });
  };

  return <Draggable draggableId={data.id} index={index}>
    {provider => (
      <li {...provider.draggableProps} ref={provider.innerRef} className="h-full w-[272]px shrink-0 select-none">
        <div {...provider.dragHandleProps}>

        </div>
      </li>
    )}
  </Draggable>;
};
