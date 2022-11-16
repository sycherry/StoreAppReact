import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { initialData } from '../initialData';
import { ItemType } from '../models/ItemType';
import itemList from './itemList/reducers';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("itemList");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: ItemType[]) => {
  console.log("save state",state);
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("itemList", serializedState);
  } catch (err) {
    console.log(err);
  }
};

const initStore = () => {
  let initialState = loadState() || initialData;
  const store = configureStore({
    reducer: itemList,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false
    }),
  });

  store.subscribe(() => {
    saveState(store.getState());
  });
  return store;
};

export const wrapper = createWrapper(initStore);
