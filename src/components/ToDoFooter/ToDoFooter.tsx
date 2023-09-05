import { CustomLink } from '../CustomLink';

import { ToDoFooterButton } from './ToDoFooterButton/ToDoFooterButton';
import { ToDoModal } from './ToDoModal/ToDoModal';

import './ToDoFooter.scss';

export const ToDoFooter = () => {
  const homeImage = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 24.227">
    <g id="home" transform="translate(-23.531 -0.001)">
      <g id="Group_31" data-name="Group 31" transform="translate(23.531 0.001)">
        <g id="Group_30" data-name="Group 30" transform="translate(0 0)">
          <path id="Path_85" data-name="Path 85" d="M45.153,8,35.132.207a.979.979,0,0,0-1.2,0L23.909,8a.979.979,0,0,0-.378.772V21.022a3.209,3.209,0,0,0,3.206,3.206H42.325a3.209,3.209,0,0,0,3.206-3.206V8.774A.979.979,0,0,0,45.153,8ZM43.574,21.022a1.25,1.25,0,0,1-1.248,1.248H26.737a1.25,1.25,0,0,1-1.248-1.248V9.252l9.043-7.033,9.043,7.033Z" transform="translate(-23.531 -0.001)" fill="currentColor"></path>
        </g>
      </g>
      <g id="Group_33" data-name="Group 33" transform="translate(29.88 10.128)">
        <g id="Group_32" data-name="Group 32" transform="translate(0)">
          <path id="Path_86" data-name="Path 86" d="M172.971,235.317h-7.195a1.054,1.054,0,0,0-1.054,1.054v11.991a1.054,1.054,0,1,0,2.108,0V237.425h5.087v10.937a1.054,1.054,0,1,0,2.108,0V236.371A1.054,1.054,0,0,0,172.971,235.317Z" transform="translate(-164.722 -235.317)" fill="currentColor"></path>
        </g>
      </g>
    </g>
  </svg>;
  const taskImage = <svg id="grid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
    <g id="Group_23" data-name="Group 23">
      <g id="Group_22" data-name="Group 22">
        <path id="Path_81" data-name="Path 81" d="M7.752,0H2.044A2.047,2.047,0,0,0,0,2.044V7.752A2.047,2.047,0,0,0,2.044,9.8H7.752A2.047,2.047,0,0,0,9.8,7.752V2.044A2.047,2.047,0,0,0,7.752,0Zm.239,7.752a.239.239,0,0,1-.239.239H2.044a.239.239,0,0,1-.239-.239V2.044a.239.239,0,0,1,.239-.239H7.752a.239.239,0,0,1,.239.239Z" fill="currentColor"></path>
      </g>
    </g>
    <g id="Group_25" data-name="Group 25" transform="translate(12.203)">
      <g id="Group_24" data-name="Group 24">
        <path id="Path_82" data-name="Path 82" d="M295.363,0h-5.708a2.047,2.047,0,0,0-2.044,2.044V7.752A2.047,2.047,0,0,0,289.655,9.8h5.708a2.047,2.047,0,0,0,2.044-2.045V2.044A2.047,2.047,0,0,0,295.363,0Zm.239,7.752a.239.239,0,0,1-.239.239h-5.708a.239.239,0,0,1-.239-.239V2.044a.239.239,0,0,1,.239-.239h5.708a.239.239,0,0,1,.239.239Z" transform="translate(-287.611)" fill="currentColor"></path>
      </g>
    </g>
    <g id="Group_27" data-name="Group 27" transform="translate(12.203 12.203)">
      <g id="Group_26" data-name="Group 26">
        <path id="Path_83" data-name="Path 83" d="M295.363,287.611h-5.708a2.047,2.047,0,0,0-2.044,2.044v5.708a2.047,2.047,0,0,0,2.044,2.044h5.708a2.047,2.047,0,0,0,2.044-2.044v-5.708A2.047,2.047,0,0,0,295.363,287.611Zm.239,7.752a.239.239,0,0,1-.239.239h-5.708a.239.239,0,0,1-.239-.239v-5.708a.239.239,0,0,1,.239-.239h5.708a.239.239,0,0,1,.239.239Z" transform="translate(-287.611 -287.611)" fill="currentColor"></path>
      </g>
    </g>
    <g id="Group_29" data-name="Group 29" transform="translate(0 12.203)">
      <g id="Group_28" data-name="Group 28">
        <path id="Path_84" data-name="Path 84" d="M7.752,287.611H2.044A2.047,2.047,0,0,0,0,289.655v5.708a2.047,2.047,0,0,0,2.044,2.044H7.752A2.047,2.047,0,0,0,9.8,295.363v-5.708A2.047,2.047,0,0,0,7.752,287.611Zm.239,7.752a.239.239,0,0,1-.239.239H2.044a.239.239,0,0,1-.239-.239v-5.708a.239.239,0,0,1,.239-.239H7.752a.239.239,0,0,1,.239.239Z" transform="translate(0 -287.611)" fill="currentColor"></path>
      </g>
    </g>
  </svg>;

  return (
    <div className="todo-footer">
      <ToDoFooterButton image={homeImage} text="home">
        <CustomLink to="/" />
      </ToDoFooterButton>  
      <div className="todo-footer__add">
        <ToDoModal />
      </div>
      <ToDoFooterButton image={taskImage} text="task">
        <CustomLink to="/task" />
      </ToDoFooterButton>  
    </div>
  );
};