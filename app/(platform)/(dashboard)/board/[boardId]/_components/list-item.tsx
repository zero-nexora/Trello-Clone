import { cn } from "@/lib/utils";
import { ListWithCards } from "@/types";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { ElementRef, useRef, useState } from "react";
import { ListHeader } from "./list-header";
import { CardItem } from "./card-item";

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

  return (
    <Draggable draggableId={data.id} index={index}>
      {(provider) => (
        <li
          {...provider.draggableProps}
          ref={provider.innerRef}
          className="h-full w-[272]px shrink-0 select-none"
        >
          <div
            {...provider.dragHandleProps}
            className="w-full rounded-md bg-[#f1f2f4] pb-2 shadow-md"
          >
            <ListHeader data={data} onAddCard={enableEditing} />
            <Droppable droppableId={data.id} type="card">
              {(provider) => (
                <ol
                  {...provider.droppableProps}
                  ref={provider.innerRef}
                  className={cn(
                    "mx-1 flex flex-col gap-y-2 px-1 py-0.5 ",
                    data.cards.length > 0 ? "mt-2" : "mt-0"
                  )}
                >
                  {data.cards.map((card, index) => (
                    <CardItem key={card.id} data={card} index={index} />
                  ))}
                  {provider.placeholder}
                </ol>
              )}
            </Droppable>
            {/* <CardForm /> */}
          </div>
        </li>
      )}
    </Draggable>
  );
};
