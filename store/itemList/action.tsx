import { AnyAction } from "@reduxjs/toolkit"

export const itemListActionTypes = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  UPDATE: 'UPDATE'
}

export interface ItemList {
  id: any
  title: string
  detail: string
  photo: string
  time: string
}

export const addItemList = (payload: ItemList): AnyAction => ({
    type: itemListActionTypes.ADD,
    payload
})

export const removeItemList = (payload: ItemList) : AnyAction => ({
    type: itemListActionTypes.REMOVE,
    payload
})

export const updateItemList = (payload: ItemList) : AnyAction => ({
    type: itemListActionTypes.UPDATE,
    payload
  })