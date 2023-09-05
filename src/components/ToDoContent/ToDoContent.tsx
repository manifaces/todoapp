import './ToDoContent.scss';

export type ToDoContentProps = {
  title: string;
  children: React.ReactNode;
}

export const ToDoContent: React.FC<ToDoContentProps> = ({title, children}) => {
  return (
    <div className="todo-content">
      <p className="todo-content__title">{title}</p>
      {children}
    </div>
  );
};