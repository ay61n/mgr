import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Product } from 'src/app/Models/Product';
import { GetCarts, AddToCart, RemoveFromCart } from 'src/app/store/actions';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit 
{
  shoppingCart: Product[] = [];
  totalCost;
  
  constructor(private store: Store<{ items: Product[]; cart: []; totalCost:number}>) 
  {
    store.pipe(select('shop')).subscribe(data => (this.shoppingCart = data.cart, this.totalCost=data.totalCost));
  }
  ngOnInit() 
  {
    this.loadChart();
    console.log(this.shoppingCart);
  }
  loadChart()
  {
    this.store.dispatch(new GetCarts());
  }
  addToCart(item: Product) 
  {
    this.store.dispatch(new AddToCart(item));
  }
  removeFromCart(item: Product) 
  {
    this.store.dispatch(new RemoveFromCart(item));
  }

}
