import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import './index.scss';
import AppToDo from './AppToDo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <AppToDo />
  </HashRouter>
);