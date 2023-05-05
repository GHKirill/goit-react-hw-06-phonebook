import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './actions';

export const contactsReducer = createReducer([], {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(item => item.id !== action.payload.id);
  },
});

export const filterReducer = createReducer('', {
  [changeFilter]: (state, action) => action.payload,
});
