import { RootState } from '.';

export const itemsSelector = (state: RootState) => state.todos.items;

export const amountItemsSelector = (state: RootState) => state.todos.items.length;

export const filteritemsSelector = (state: RootState) => {
  if (state.todos.activeFilter === 'completed') {
    return state.todos.items.filter(item => item.completed === true);
  } else if (state.todos.activeFilter === 'active') {
    return state.todos.items.filter(item => item.completed === false);
  } else {
    return state.todos.items;
  }
};

export const reminderSelector = (state: RootState) => state.todos.reminder;

export const tagsSelector = (state: RootState) => state.todos.categories;