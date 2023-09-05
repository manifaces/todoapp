import { ToDoContent } from '../components/ToDoContent/ToDoContent';
import { TaskList } from '../components/TaskList/TaskList';


export const Taskpage = () => {
  return (
    <ToDoContent title="projects">
      <TaskList />
    </ToDoContent>
  );
};