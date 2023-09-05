import { ToDoDate } from './ToDoDate/ToDoDate';
import { ToDoWelcome } from './ToDoWelcome/ToDoWelcome';
import { ToDoReminder } from './ToDoReminder/ToDoReminder';

import './ToDoHeader.scss';

export const ToDoHeader = () => {
  return (
    <div className="todo-header">
      <ToDoDate />
      <ToDoWelcome />
      <ToDoReminder />
    </div>
  );
};