import { itemListActionTypes } from './action';
import { initialData } from '../../initialData';
import { ItemType } from '../../models/ItemType';
import { ActionType } from './ActionType';
import { HYDRATE } from 'next-redux-wrapper';

export default function reducer(state: ItemType[] = initialData, action: ActionType) {
  let result: ItemType[] = new Array<ItemType>();
  console.log("state", state);
  switch (action.type) {
    case HYDRATE:
      let nextState = {
        ...state,
        ...action.payload,
      };
      // preserve itemList value on client side navigation
      if (state) nextState = state;
      break;
    case itemListActionTypes.ADD:
      result = [...state, action.payload];
      break;
    case itemListActionTypes.UPDATE:
      for (let index = 0; index < state.length; index++) {
        if (state[index].id === action.payload.id) {
          state[index] = action.payload;
        }
      }
      result = state;
      break;
    case itemListActionTypes.REMOVE:
      result = state.filter((item => item.id !== action.payload));
      break;
    default:
      result = state;
      break;
  }
  return result;
};