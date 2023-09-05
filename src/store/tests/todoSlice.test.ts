import { v4 as uuidv4 } from 'uuid';

import todoReducer, {
  addItem,
  removeItem,
  addCompletedItem,
  DataType,
  StateType
} from '../todoSlice';

describe('todoSlice', () => {
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
    {
      id: uuidv4(),
      content: 'Meeting with client',
      completed: false,
      reminder: false,
      category: 'meeting'
    },
  ];

  const testState: StateType = {
    items: [...items],
    categories: ['Personal', 'Work'],
    activeFilter: 'completed',
    reminder: { items: [], isVisible: false }
  };

  it('new item addition', () => {
    const action = { type: addItem.type, payload: { currentText: 'TaskText', currentCategory: 'work' } };
    const result = todoReducer(testState, action);
    expect(result.items[3].content).toBe('TaskText');
    expect(result.items).toHaveLength(4);
  });

  it('item removal', () => {
    const action = { type: removeItem.type, payload: { id: items[0].id, content: 'Go jogging with Christin' } };
    const result = todoReducer(testState, action);
    expect(result.items[0].content).toBe('Send project file');
    expect(result.items).toHaveLength(2);
  });

  it('completed item addition', () => {
    const action = { type: addCompletedItem.type, payload: items[0].id };
    const result = todoReducer(testState, action);
    expect(result.items[0].completed).toBe(true);
  });
});