import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export type DataType = {
  id: string;
  content: string;
  completed: boolean;
  reminder: boolean;
  category: string;
}

const data: DataType[] = [
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
    completed: false,
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
  {
    id: uuidv4(),
    content: 'Email client',
    completed: false,
    reminder: false,
    category: 'study'
  },
];

export type StateType = {
  items: DataType[];
  categories: string[];
  reminder: {
      items: React.ReactNode[];
      isVisible: boolean;
  }
}

const initialState: StateType = { 
  items: data,
  categories: Array.from(new Set(data.map(item => item.category))),
  reminder: { items: [], isVisible: true }
};


const todoSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      const newItem: DataType = {
        id: uuidv4(),
        content: action.payload.currentText,
        completed: false,
        reminder: false,
        category: action.payload.currentCategory
      };
      state.items = [...state.items, newItem];
    },
    removeItem(state, action) {
      const newReminderItems = state.reminder.items.filter(item => item !== action.payload.content);
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.reminder = {items: newReminderItems, isVisible: state.reminder.isVisible}; 
    },
    addCompletedItem(state, action) {
      const newItems = state.items.map(item => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        return item;
      });
      state.items = newItems;
    },
    closeReminder(state) {
      state.reminder = { items: [], isVisible: false };
      state.items.forEach(item => item.reminder = false);
    },
    changeReminder(state, action) {
      const currentReminderItem = state.reminder.items.find(item => item === action.payload.content);
      let newReminderItems;

      if (currentReminderItem) {
        newReminderItems = state.reminder.items.filter(item => item !== currentReminderItem);
      } else {
        newReminderItems = [...state.reminder.items, action.payload.content];
      }
      
      state.reminder = { items: newReminderItems, isVisible: true };
      
      const newItems = state.items.map(item => {
        if (item.id === action.payload.id) {
          item.reminder = !item.reminder;
        }
        return item;
      });
      
      state.items = newItems;
    },
    updateItems(state, action) {
      state.items = action.payload;
    }
  },
});

export const { addItem, removeItem, addCompletedItem, closeReminder, changeReminder, updateItems } = todoSlice.actions;

export default todoSlice.reducer;