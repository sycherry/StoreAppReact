import { itemListActionTypes } from './action'
import { initialData } from '../../initialData'

export interface ItemList {
  id: string
  title: string
  detail: string
  photo: string
  time: string
}

type Action = {
  type: string
  payload: any
}

const itemListInitialState = initialData

export default function reducer(state: ItemList[] = itemListInitialState, action: Action) {
  // console.log("action", action)
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
        state.filter((item => item.id !== action.payload.id))
      )
    default:
      return state
  }
}