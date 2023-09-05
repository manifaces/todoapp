import { useSelector, useDispatch } from 'react-redux';

import { reminderSelector } from '../../../store/selectors';
import { closeReminder } from '../../../store/todoSlice';

import './ToDoReminder.scss';

export const ToDoReminder = () => {
  const reminder = useSelector(reminderSelector);
  const dispatch = useDispatch(); 
  return (
    <div className="todo-reminder" data-show={reminder.isVisible ? 'true' : 'false'} >
      <div className="todo-reminder__close" onClick={() => dispatch(closeReminder())}></div>
      <div className="todo-reminder__info">
        <div className="todo-reminder__title">Today Reminder</div>
        {(() => {
          if (reminder.items.length) {
            return (
              reminder.items.map((item, i) =>
                <div className="todo-reminder__description" key={i}>{item}</div>
              )
            );
          } else {
            return (
              <div className="todo-reminder__description">No reminders today</div>
            );
          }
        })()}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="61.107" height="66.578" viewBox="0 0 61.107 66.578">
        <g id="bell_1_" data-name="bell (1)" transform="translate(-28.098 -27.599) rotate(22)">
          <g id="Group_10" data-name="Group 10" transform="translate(71.968)">
            <path id="Path_55" data-name="Path 55" d="M203.382,370.683a7.821,7.821,0,0,1-7.812-7.812v-7.277a5.9,5.9,0,0,1,5.891-5.891H205.3a5.9,5.9,0,0,1,5.891,5.891v7.277A7.82,7.82,0,0,1,203.382,370.683Z" transform="translate(-195.57 -304.499)" fill="#ff52a8"></path>
            <path id="Path_56" data-name="Path 56" d="M215.094,20.979h-.428a5.9,5.9,0,0,1-5.891-5.891V6.1a6.1,6.1,0,1,1,12.209,0v8.984A5.9,5.9,0,0,1,215.094,20.979Z" transform="translate(-207.069)" fill="#ff52a8"></path>
          </g>
          <path id="Path_57" data-name="Path 57" d="M123.163,65.614H121.3A18.948,18.948,0,0,0,102.372,84.54V102.1a2.008,2.008,0,0,0,2.008,2.008h35.7a2.008,2.008,0,0,0,2.008-2.008V84.54A18.948,18.948,0,0,0,123.163,65.614Z" transform="translate(-42.452 -57.132)" fill="#feeb70"></path>
          <path id="Path_58" data-name="Path 58" d="M98.848,347.068H60.71a7.1,7.1,0,0,1-7.092-7.092v-.56a7.1,7.1,0,0,1,7.092-7.092H98.848a7.1,7.1,0,0,1,7.092,7.092v.56A7.1,7.1,0,0,1,98.848,347.068Z" transform="translate(0 -289.365)" fill="#fef7cb"></path>
        </g>
      </svg>
      <div className="todo-reminder__wtf">without animation? &#129320;</div>
    </div>
  );
};