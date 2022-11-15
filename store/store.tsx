import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { initialData } from '../initialData';
import { ActionType } from './itemList/ActionType';
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

const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("itemList", serializedState);
  } catch (err) {
    console.log(err);
  }
};

const combinedReducer = combineReducers({
  itemList
});

const reducer = (state: any, action: ActionType) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    // preserve itemList value on client side navigation
    if (state.itemList.itemList) nextState.itemList.itemList = state.itemList.itemList;
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const initStore = () => {
  const initialState = loadState() || initialData;
  const store = configureStore({
    reducer,
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
