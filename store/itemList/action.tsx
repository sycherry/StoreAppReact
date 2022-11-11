export const itemListActionTypes = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  UPDATE: 'UPDATE'
}

export interface ItemList {
  id: string
  title: string
  detail: string
  photo: string
  time: string
}

export const addItemList = (payload: ItemList) => (dispatch: any) => {
  return dispatch({
    type: itemListActionTypes.ADD,
    payload
  })
}

export const removeItemList = (payload: ItemList) => (dispatch: any) => {
  return dispatch({
    type: itemListActionTypes.REMOVE,
    payload
  })
}

export const updateItemList = (payload: ItemList) => (dispatch: any) => {
  return dispatch({
    type: itemListActionTypes.UPDATE,
    payload
  })
}