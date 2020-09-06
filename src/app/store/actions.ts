import { Action } from '@ngrx/store';
import { Product } from '../Models/Product';

export enum ActionTypes 
{
  Add             = '[Product]  Add to cart',
  Remove          = '[Product]  Remove from cart',
  RemoveItem      = '[Product]  Remove Item from cart',
  RemoveAll       = '[Product]  Remove All',
  LoadCart        = '[Products] Load cart from server',
  LoadCartSuccess = '[Products] Load success'
}

export class AddToCart implements Action 
{
  readonly type = ActionTypes.Add;
  constructor(public payload: Product) {}
}
export class GetCarts implements Action 
{
  readonly type = ActionTypes.LoadCart;
}
export class RemoveFromCart implements Action 
{
  readonly type = ActionTypes.Remove;
  constructor(public payload: Product) {}
}
export class RemoveItemFromCart implements Action 
{
  readonly type = ActionTypes.RemoveItem;
  constructor(public payload: Product) {}
}
export class RemoveAllItem implements Action 
{
  readonly type = ActionTypes.RemoveAll;
  constructor() {}
}
export class LoadCart implements Action 
{
  readonly type = ActionTypes.LoadCartSuccess;
  constructor(public payload: Product[]) {}
}

export type ActionsUnion = AddToCart | RemoveFromCart | RemoveItemFromCart | RemoveAllItem | LoadCart | GetCarts;