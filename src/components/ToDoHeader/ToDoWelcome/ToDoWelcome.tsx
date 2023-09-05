import { useSelector } from 'react-redux';

import { amountItemsSelector } from '../../../store/selectors';
import './ToDoWelcome.scss';

export const ToDoWelcome = () => {
  const amountItems = useSelector(amountItemsSelector);
  return (
    <>
      <div className="todo-welcome">
        <p className="todo-welcome__title">
          Hello nomenEst!
        </p>
        <p className="todo-welcome__text">
          Today you have <span className="todo-amount">{amountItems || 'no'}</span> tasks
        </p>
      </div>
      <div className="todo-header__user">
        <img src={process.env.PUBLIC_URL + '/avatar.png'} alt="User" />
      </div>
    </>
  );
};