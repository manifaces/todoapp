import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';

import { removeItem, addCompletedItem, changeReminder } from '../../../store/todoSlice';

import { DataType } from '../../../store/todoSlice';

import './ToDoItem.scss';

export type ToDoItemProps = {
  item: DataType;
  index: number;
}

export const ToDoItem: React.FC<ToDoItemProps> = ({ item, index }) => {
  const dispatch = useDispatch();
  const [completed, setCompleted] = useState(item.completed);
  const addCompleted = () => {
    setCompleted(!completed);
    dispatch(addCompletedItem(item.id));
  };
  const onChangeReminder = () => {
    dispatch(changeReminder({ id: item.id, content: item.content }));
  };
  return (
    <Draggable draggableId={String(item.id)} index={index}>
      {(provided) => (
        <li
          className="todo-list__item todo-item"
          data-category={item.category}
          data-completed={completed}
          ref={provided.innerRef} 
          {...provided.draggableProps} 
          {...provided.dragHandleProps}
        >
          <label className="todo-item__checkbox" onClick={addCompleted} >
            <input type="checkbox" onClick={e => e.stopPropagation()} />
            <span></span>
          </label>
          <div className="todo-item__text">{item.content}</div>
          <div
            className="todo-item__reminder" onClick={onChangeReminder} data-active={item.reminder ? 'true' : 'false'}>
            <svg viewBox="0 0 10.923 14.08">
              <g id="Bell" data-name="Bell" transform="translate(0)">
                <path id="Path_92" data-name="Path 92" d="M175.207,404.514s0,.007,0,.011a1.669,1.669,0,1,0,3.339,0s0-.007,0-.011Z" transform="translate(-171.415 -392.115)" fill="#d9d9d9"></path>
                <path id="Path_93" data-name="Path 93" d="M62.285,10.313l-1.5-2.207V5.352A3.829,3.829,0,0,0,57.705,1.6V.751a.751.751,0,0,0-1.5,0V1.6a3.829,3.829,0,0,0-3.077,3.754V8.106l-1.5,2.207a.759.759,0,0,0,.627,1.186h9.4a.759.759,0,0,0,.627-1.186Z" transform="translate(-51.493)" fill="#d9d9d9"></path>
              </g>
            </svg>
          </div>
          <div className="todo-item__remove" onClick={() => dispatch(removeItem({ id: item.id, content: item.content }))}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35">
              <g id="delete" transform="translate(-312 -364)">
                <circle id="Ellipse_13" data-name="Ellipse 13" cx="17.5" cy="17.5" r="17.5" transform="translate(312 364)" fill="#ffcfcf"></circle>
                <g id="trash" transform="translate(298.468 373)">
                  <g id="Group_48" data-name="Group 48" transform="translate(23.532 2.98)">
                    <g id="Group_47" data-name="Group 47">
                      <path id="Path_94" data-name="Path 94" d="M37.6,94.127H24.187a.655.655,0,1,0,0,1.31H37.6a.655.655,0,1,0,0-1.31Z" transform="translate(-23.532 -94.127)" fill="#fb3636"></path>
                    </g>
                  </g>
                  <g id="Group_50" data-name="Group 50" transform="translate(25.022 2.98)">
                    <g id="Group_49" data-name="Group 49">
                      <path id="Path_95" data-name="Path 95" d="M81.681,94.127a.655.655,0,0,0-.655.655v10.43a.836.836,0,0,1-.835.835h-7.45a.836.836,0,0,1-.835-.835V94.782a.655.655,0,1,0-1.31,0v10.43a2.147,2.147,0,0,0,2.145,2.145h7.45a2.147,2.147,0,0,0,2.145-2.145V94.782A.655.655,0,0,0,81.681,94.127Z" transform="translate(-70.596 -94.127)" fill="#fb3636"></path>
                    </g>
                  </g>
                  <g id="Group_52" data-name="Group 52" transform="translate(27.257)">
                    <g id="Group_51" data-name="Group 51">
                      <path id="Path_96" data-name="Path 96" d="M146.316,0h-2.98a2.147,2.147,0,0,0-2.145,2.145v1.49a.655.655,0,0,0,1.31,0V2.145a.836.836,0,0,1,.835-.835h2.98a.836.836,0,0,1,.835.835v1.49a.655.655,0,1,0,1.31,0V2.145A2.147,2.147,0,0,0,146.316,0Z" transform="translate(-141.191)" fill="#fb3636"></path>
                    </g>
                  </g>
                  <g id="Group_54" data-name="Group 54" transform="translate(28.747 6.705)">
                    <g id="Group_53" data-name="Group 53">
                      <path id="Path_97" data-name="Path 97" d="M188.909,211.786a.655.655,0,0,0-.655.655v4.47a.655.655,0,0,0,1.31,0v-4.47A.655.655,0,0,0,188.909,211.786Z" transform="translate(-188.254 -211.786)" fill="#fb3636"></path>
                    </g>
                  </g>
                  <g id="Group_56" data-name="Group 56" transform="translate(31.727 6.705)">
                    <g id="Group_55" data-name="Group 55">
                      <path id="Path_98" data-name="Path 98" d="M283.037,211.786a.655.655,0,0,0-.655.655v4.47a.655.655,0,0,0,1.31,0v-4.47A.655.655,0,0,0,283.037,211.786Z" transform="translate(-282.382 -211.786)" fill="#fb3636"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </li>
      )}
    </Draggable>
  );
};