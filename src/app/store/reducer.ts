import { ActionsUnion, ActionTypes } from './actions';
import { isNgTemplate } from '@angular/compiler';
import { Product } from '../Models/Product';

export const initialState = {
  items: [],
  cart: [],
  totalCost:0,
  totalDifItem:0
};

export function ShopReducer(state = initialState, action: ActionsUnion) {
  console.log(action);
  switch (action.type) 
  {
    case ActionTypes.LoadCartSuccess:
      return {
        ...state,
        cart: [...state.cart]
      };

    case ActionTypes.Add:
      const newSubtotal     = action.payload.cost;
      const newTotal        = state.totalCost*1 + newSubtotal;
      let   newTotalDifItem:number;
      
      if(state.cart.findIndex(item => item.id == action.payload.id)<0)
      {
        newTotalDifItem = state.totalDifItem*1+1;
      }
      else
      {
        newTotalDifItem = state.totalDifItem;
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalCost:[newTotal],
        totalDifItem:[newTotalDifItem]
      };

    case ActionTypes.Remove:
      const newSubtotalR     = action.payload.cost;
      const newTotalR        = state.totalCost - newSubtotalR;
      const list             = state.cart.filter(item => item.id == action.payload.id)
      let   newTotalDifItemR:number;
      if(list.length==1)
      {
        newTotalDifItemR = state.totalDifItem-1;
      }
      else
      {
        newTotalDifItemR = state.totalDifItem;
      }
      return {
        ...state,
        cart: [...state.cart.slice(0, state.cart.findIndex(item => item.id == action.payload.id))
              ,...state.cart.slice(   state.cart.findIndex(item => item.id == action.payload.id) + 1)],
              totalCost:[newTotalR],
              totalDifItem:[newTotalDifItemR]
      };

    default:
      return state;
  }
}
