import { useSelector } from 'react-redux';

import { itemsSelector } from '../../store/selectors';
import { tagsSelector } from '../../store/selectors';

import { TaskItem } from './TaskItem/TaskItem';
import './TaskList.scss';


export const TaskList = () => {
  const items = useSelector(itemsSelector);
  const tags = useSelector(tagsSelector);
  return (
    <ul className="task-list">
      {tags.map((tag, i) => {
        const amountItems = items.filter(item => item.category === tag).length;
        return <TaskItem key={i} title={tag} amountItems={amountItems} image={`${tag}.svg`}/>;
      })}
    </ul>
  );
};