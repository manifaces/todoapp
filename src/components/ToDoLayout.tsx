import { Outlet } from 'react-router-dom';

import { ToDoHeader } from './ToDoHeader/ToDoHeader';
import { ToDoFooter } from './ToDoFooter/ToDoFooter';

export const ToDoLayout = () => {
  return (
    <>
      <ToDoHeader />
      <Outlet />
      <ToDoFooter />
    </>
  );
};