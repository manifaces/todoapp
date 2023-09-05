import './TaskItem.scss';

export type TaskItemProps = {
  title: string;
  amountItems: number;
  image: string;
}

export const TaskItem: React.FC<TaskItemProps> = ({ title, amountItems, image }) => {
  return (
    <li className="task-item">
      <div className="task-item__content">
        <div className="task-item__image">
          <img src={`${process.env.PUBLIC_URL}/${image}`} alt="" />
        </div>
        <p className="task-item__title">{title}</p>
        <p className="task-item__amount">{amountItems} Task</p>
      </div>
    </li>
  );
};