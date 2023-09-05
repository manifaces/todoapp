import './ToDoFooterButton.scss';

export type ToDoFooterButtonProps = {
  image: JSX.Element;
  text: string;
  children?: React.ReactNode;
}

export const ToDoFooterButton: React.FC<ToDoFooterButtonProps> = ({image, text, children}) => {
  return (
    <div className="todo-footer__button">
      {children ? children : null}
      <div className="todo-footer__icon">
        {image}
      </div>
      <p className="todo-footer__text">{text}</p>
    </div>
  );
};