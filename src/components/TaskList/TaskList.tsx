import { useSelector } from 'react-redux';

import { RootState } from '../../store';

import { TaskItem } from './TaskItem/TaskItem';
import './TaskList.scss';


export const TaskList = () => {
  const items = useSelector((state: RootState) => state.todos.items);
  const tags = useSelector((state: RootState) => state.todos.categories);
  return (
    <ul className="task-list">
      {tags.map((tag, i) => {
        const amountItems = items.filter(item => item.category === tag).length;
        return <TaskItem key={i} title={tag} amountItems={amountItems} image={`${tag}.svg`}/>;
      })}
    </ul>
  );
};