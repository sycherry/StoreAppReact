import { AnyAction } from "@reduxjs/toolkit";
import { ItemType } from "../../models/ItemType";

export const itemListActionTypes = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  UPDATE: 'UPDATE'
};

export const addItemList = (payload: ItemType): AnyAction => ({
    type: itemListActionTypes.ADD,
    payload
});

export const removeItemList = (payload: string) : AnyAction => ({
    type: itemListActionTypes.REMOVE,
    payload
});

export const updateItemList = (payload: ItemType) : AnyAction => ({
    type: itemListActionTypes.UPDATE,
    payload
  });