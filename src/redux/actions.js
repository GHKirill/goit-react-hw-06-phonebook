import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/Add');
export const deleteContact = createAction('contacts/Delete');

export const changeFilter = createAction('filter/Change');
