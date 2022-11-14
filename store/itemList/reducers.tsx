import { itemListActionTypes } from './action'
import { initialData } from '../../initialData'
import { ItemType } from '../../type/ItemType'
import { ActionType } from './ActionType'

const itemListInitialState = initialData

export default function reducer(state: ItemType[] = itemListInitialState, action: ActionType) {
  console.log("action", action)
  //console.log("action.payload.id",action.payload.id)
  let newData
  switch (action.type) {
    case itemListActionTypes.ADD:
      return [...state, action.payload]
    case itemListActionTypes.UPDATE:
      console.log("更新しました",action.payload.id)
      return (
        newData = state.map(item => {
          if (item.id == action.payload.id) {
            return action.payload;
          }
          return item;
        })
      )
    case itemListActionTypes.REMOVE:
    console.log("削除しました",action.payload)
      return (
        state.filter((item => item.id !== action.payload))
      )
      
    default:
      return state
  }
}