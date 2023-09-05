import { ToDoContent } from '../components/ToDoContent/ToDoContent';
import { ToDoList } from '../components/ToDoList/ToDoList';

export const Homepage = () => {
  return (
    <ToDoContent title="tasks">
      <ToDoList />
    </ToDoContent>
  );
};