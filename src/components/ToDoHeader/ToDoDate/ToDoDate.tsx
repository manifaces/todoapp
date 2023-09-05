import {useState, useEffect} from 'react';

import { getCurrentTime } from '../../../lib/getCurrentTime';

import './ToDoDate.scss';

export const ToDoDate = () => {
  const [time, setTime] = useState<string>(getCurrentTime());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime = getCurrentTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="todo-date">{time}</div>
  );
};