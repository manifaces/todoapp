import { v4 as uuidv4 } from 'uuid';

import { itemsSelector } from '../selectors';
import { filteritemsSelector } from '../selectors';
import { DataType } from '../todoSlice';
import { StateType } from '../todoSlice';

describe('selectors', () => {
  const items: DataType[] = [
    {
      id: uuidv4(),
      content: 'Go jogging with Christin',
      completed: false,
      reminder: false,
      category: 'personal'
    },
    {
      id: uuidv4(),
      content: 'Send project file',
      completed: true,
      reminder: false,
      category: 'work'
    },
  ];

  const testState: StateType = {
    items: [...items],
    categories: ['Personal', 'Work'],
    activeFilter: 'completed',
    reminder: { items: [], isVisible: false }
  };

  it('select items from state', () => {
    const result = itemsSelector({ todos: testState });
    expect(result).toEqual(testState.items);
  });

  it('select completed items', () => {
    const result = filteritemsSelector({ todos: testState});
    expect(result).toHaveLength(1); // возвращает единственную выполненную задачу
  });
});