import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import itemList from './itemList/reducers'

const combinedReducer = combineReducers({
  itemList
});

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    // preserve itemList value on client side navigation
    if (state.itemList.itemList) nextState.itemList.itemList = state.itemList.itemList
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

const initStore = () => {
  return configureStore({
    reducer,
  });
}
export const wrapper = createWrapper(initStore)
