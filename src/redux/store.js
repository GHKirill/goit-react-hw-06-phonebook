import { configureStore } from '@reduxjs/toolkit';
//import { contactsReducer, filterReducer } from './reducer';
import contactsSlice from './contactsSlice';
import filterSlice from './filterSlice';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   // version: 1,
//   storage,
// };

// const rootReducer = combineReducers({
//   //contacts: contactsReducer,
//   contacts: contactsSlice.reducer,
//   filter: filterSlice.reducer,
// });

//const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
    //contacts: persistedReducer,
    //persistedReducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

//export let persistor = persistStore(store);
