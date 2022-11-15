import { itemListActionTypes } from './action';
import { initialData } from '../../initialData';
import { ItemType } from '../../models/ItemType';
import { ActionType } from './ActionType';

const itemListInitialState = initialData;

export default function reducer(state: ItemType[] = itemListInitialState, action: ActionType) {
  let newData;
  switch (action.type) {
    case itemListActionTypes.ADD:
      return [...state, action.payload];
    case itemListActionTypes.UPDATE:
      return (
        newData = state.map(item => {
          if (item.id == action.payload.id) {
            return action.payload;
          }
          return item;
        })
      );
    case itemListActionTypes.REMOVE:
      return (
        state.filter((item => item.id !== action.payload))
      );
    default:
      return state;
  }
};