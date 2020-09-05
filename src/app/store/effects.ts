import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from './actions';
import { ProductService } from '../Services/product.service';

@Injectable()
export class ShopEffects 
{
  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(ActionTypes.LoadItems),
    mergeMap(() =>
      this.productService.getAll().pipe(
        map(products => {
          return { type: ActionTypes.LoadSuccess, payload: products };
        }),
        catchError(() => EMPTY)
      )
    )
  );

  constructor
  (
    private actions$      : Actions,
    private productService: ProductService
  ) 
  {}
}
