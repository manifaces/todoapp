import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import { RootState } from '../../store';
import { updateItems } from '../../store/todoSlice';

import { ToDoItem } from './ToDoItem/ToDoItem';
import './ToDoList.scss';

export const ToDoList = () => {
  const items = useSelector((state: RootState) => state.todos.items);
  const dispatch = useDispatch();
  
  const handleOnDragEnd = (result: DropResult) => {
    const dndItems = Array.from(items);
    const [reorderedItem] = dndItems.splice(result.source.index, 1);
    
    if (result.destination) {
      dndItems.splice(result.destination.index, 0, reorderedItem);
    }

    dispatch(updateItems(dndItems));
  };
  
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="toDoList">
        {(provided) => (
          <>
            <ul className="todo-list" {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((item, index) =>
                <ToDoItem key={item.id} item={item} index={index} />
              )}
            </ul>
            {provided.placeholder}
          </>
        )}
      </Droppable>
    </DragDropContext>
  );
};