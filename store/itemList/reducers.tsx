import { itemListActionTypes } from './action'
import { initialData } from '../../initialData'
import { ItemType } from '../../type/ItemType'
import { ActionType } from './ActionType'

const itemListInitialState = initialData

export default function reducer(state: ItemType[] = itemListInitialState, action: ActionType) {
  console.log("action", action)
  let newData
  switch (action.type) {
    case itemListActionTypes.ADD:
      return [...state, action.payload]
    case itemListActionTypes.UPDATE:
      return (
        newData = state.map(item => {
          if (item.id == action.payload.id) {
            return action.payload;
          }
          return item;
        })
      )
    case itemListActionTypes.REMOVE:
      return (
        state.filter((id => id !== action.payload.id))
      )
    default:
      return state
  }
}