import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store';

import { ToDoLayout } from './components/ToDoLayout';
import { Homepage } from './pages/Homepage';
import { Taskpage } from './pages/Taskpage';
import './AppToDo.scss';

function AppToDo() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<ToDoLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/task" element={<Taskpage />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default AppToDo;