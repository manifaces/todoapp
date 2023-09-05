import { useDispatch } from 'react-redux';
import './ToDoSettings.scss';
import { useState } from 'react';

import { filterItems } from '../../store/todoSlice';

export enum FilterVariant {
  all = 'all',
  active = 'active',
  completed = 'completed',
}

export const ToDoSettings = () => {
  const [filter, setFilter] = useState<string>(FilterVariant.all);
  const dispatch = useDispatch();

  const onFilter = (value: string) => {
    setFilter(value);
    dispatch(filterItems(value));
  };

  return (
    <div className="todo-settings">
      <form className="todo-settings__form">
        <div className="todo-settings__list">
          <label className="todo-settings__item" htmlFor="all" data-active={filter === 'all' ? 'true' : 'false'}>
            <input 
              className="todo-settings__radio" 
              type="radio" 
              name="settings" 
              value="all"
              id="all"
              onChange={(e) => onFilter(e.target.value)} 
            />
            <span>All</span>
          </label>
          <label className="todo-settings__item" htmlFor="active" data-active={filter === 'active' ? 'true' : 'false'}>
            <input 
              className="todo-settings__radio" 
              type="radio" 
              name="settings" 
              value="active"
              id="active"
              onChange={(e) => onFilter(e.target.value)} 
            />
            <span>Active</span>
          </label>
          <label className="todo-settings__item" htmlFor="completed" data-active={filter === 'completed' ? 'true' : 'false'}>
            <input 
              className="todo-settings__radio" 
              type="radio" 
              name="settings" 
              value="completed"
              id="completed"
              onChange={(e) => onFilter(e.target.value)} 
            />
            <span>Completed</span>
          </label>
        </div>
      </form>
    </div>
  );
};