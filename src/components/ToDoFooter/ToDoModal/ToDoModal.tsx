import { useState } from 'react';

import { ToDoForm } from '../ToDoForm/ToDoForm';

import './ToDoModal.scss';

export const ToDoModal = () => {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(!show);
  };
  return (
    <div className="todo-modal" data-show={show ? 'true' : 'false'} >
      <div className="todo-modal__button" onClick={showModal}>
        <svg xmlns="http://www.w3.org/2000/svg" width="27.812" height="27.812" viewBox="0 0 27.812 27.812">
          <g id="add" transform="translate(1.5 1.5)">
            <g id="group_15" data-name="group 15" transform="translate(11.404)">
              <g id="group_14" data-name="group 14">
                <path id="contour_77" data-name="contour 77" d="M236.32,0a1,1,0,0,0-1,1V23.81a1,1,0,1,0,2,0V1A1,1,0,0,0,236.32,0Z" transform="translate(-235.318 0)" fill="#fff" stroke="#fff" strokeWidth="3" />
              </g>
            </g>
            <g id="group_17" data-name="group 17" transform="translate(0 11.404)">
              <g id="group_16" data-name="group 16">
                <path id="contour_78" data-name="contour 78" d="M23.81,235.318H1a1,1,0,1,0,0,2H23.81a1,1,0,1,0,0-2Z" transform="translate(0 -235.318)" fill="#fff" stroke="#fff" strokeWidth="3" />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <ToDoForm show={show} showModal={showModal} />
    </div>
  );
};