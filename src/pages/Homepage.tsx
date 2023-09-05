import { ToDoContent } from '../components/ToDoContent/ToDoContent';
import { ToDoList } from '../components/ToDoList/ToDoList';
import { ToDoSettings } from '../components/ToDoSettings/ToDoSettings';

export const Homepage = () => {
  return (
    <ToDoContent title="tasks">
      <ToDoSettings />
      <ToDoList />
    </ToDoContent>
  );
};