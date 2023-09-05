import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import { filteritemsSelector } from '../../store/selectors';
import { updateItems } from '../../store/todoSlice';

import { ToDoItem } from './ToDoItem/ToDoItem';
import './ToDoList.scss';

export const ToDoList = () => {
  const items = useSelector(filteritemsSelector);
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
              {items.length ? 
                items.map((item, index) =>
                  <ToDoItem key={item.id} item={item} index={index} />
                ) :
                <div className="todo-list__error">No tasks</div>
              }
            </ul>
            {provided.placeholder}
          </>
        )}
      </Droppable>
    </DragDropContext>
  );
};