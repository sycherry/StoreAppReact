import { AnyAction } from "@reduxjs/toolkit";

export const itemListActionTypes = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  UPDATE: 'UPDATE'
};

export interface Item {
  id: any
  title: string
  detail: string
  photo: string
  time: any
}

export const addItemList = (payload: Item): AnyAction => ({
    type: itemListActionTypes.ADD,
    payload
});

export const removeItemList = (payload: string) : AnyAction => ({
    type: itemListActionTypes.REMOVE,
    payload
});

export const updateItemList = (payload: Item) : AnyAction => ({
    type: itemListActionTypes.UPDATE,
    payload
  });