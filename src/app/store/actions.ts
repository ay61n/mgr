import { Action } from '@ngrx/store';
import { Product } from '../Models/Product';

export enum ActionTypes 
{
  Add             = '[Product]  Add to cart',
  Remove          = '[Product]  Remove from cart',
  LoadItems       = '[Products] Load items from server',
  LoadSuccess     = '[Products] Load success',
  LoadCart        = '[Products] Load cart from server',
  LoadCartSuccess = '[Products] Load success'
}

export class AddToCart implements Action 
{
  readonly type = ActionTypes.Add;
  constructor(public payload: Product) {}
}
export class GetItems implements Action 
{
  readonly type = ActionTypes.LoadItems;
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
export class LoadItems implements Action 
{
  readonly type = ActionTypes.LoadSuccess;
  constructor(public payload: Product[]) {}
}
export class LoadCart implements Action 
{
  readonly type = ActionTypes.LoadCartSuccess;
  constructor(public payload: Product[]) {}
}

export type ActionsUnion = AddToCart | RemoveFromCart | LoadItems | GetItems | LoadCart | GetCarts;