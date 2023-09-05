import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { ToDoTags } from '../ToDoTags/ToDoTags';

import { addItem } from '../../../store/todoSlice';

import './ToDoForm.scss';

export type ToDoFormProps = {
  show: boolean;
  showModal: () => void;
}

export const ToDoForm: React.FC<ToDoFormProps> = ({ show, showModal }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentCategory, setCurrentCategory] = useState('');
  
  const dispatch = useDispatch();
  const form = useRef<HTMLFormElement>(null);
  const radioButtons = useRef<Array<HTMLInputElement>>([]);
  
  useEffect(() => {
    if (form.current) {
      form.current.setAttribute('data-show', show ? 'true' : 'false');
    }
  });
  
  const onAddItem = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (currentText.trim().length && currentCategory) {
      dispatch(addItem({currentText, currentCategory}));
      showModal();
      setCurrentText('');
      setCurrentCategory('');
      radioButtons.current.forEach((button) => {
        button.checked = false;
      });
    }
  };
  
  const setCategory = (category: string) => {
    setCurrentCategory(category);
  };
  
  return (
    <form ref={form} className="todo-form">
      <p className="todo-form__text">Add new task</p>
      <input type="text" className="todo-form__input" value={currentText} onChange={(e) => setCurrentText(e.target.value)} />
      <ToDoTags setCategory={setCategory} radioButtons={radioButtons} />
      <button type="submit" className="todo-form__btn" onClick={(e) => {onAddItem(e); }}>Add task</button>
    </form>
  );
};