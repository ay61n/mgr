import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Product } from 'src/app/Models/Product';
import { GetCarts, AddToCart, RemoveFromCart, RemoveItemFromCart, RemoveAllItem } from 'src/app/store/actions';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit 
{
  shoppingCart: Product[] = [];
  products    : Product[] = [];
  totalCost;
  
  constructor(private store: Store<{ items: Product[]; cart: []; totalCost:number}>) 
  {
    //store.pipe(select('shop')).subscribe(data => (this.shoppingCart = data.cart, this.totalCost=data.totalCost));
  }
  ngOnInit() 
  {
    this.loadChart();
  }
  loadChart()
  {
    this.store.pipe(select('shoppingCart')).subscribe(data => (this.products = data.cart, this.totalCost=data.totalCost));
    this.group();
  }
  addToCart(item: Product) 
  {
    this.store.dispatch(new AddToCart(this.products.find(x=> x.id==item.id)));
    this.loadChart();
  }
  removeFromCart(item: Product) 
  {
    this.store.dispatch(new RemoveFromCart(this.products.find(x=> x.id==item.id)));
    this.loadChart();
  }
  removeItemFromCart(item: Product) 
  {
    this.store.dispatch(new RemoveItemFromCart(this.products.find(x=> x.id==item.id)));
    this.loadChart();
  }
  removeAll() 
  {
    this.store.dispatch(new RemoveAllItem());
    this.loadChart();

  }
  group()
  {
    const group = (data) =>
	  data.reduce((acc, { id,name,description,picture,detail, cost, subTotal,count}) => {
		
		const item = acc.find((el) => el.id === id);

    if (item)
    { 
      item.subTotal += cost;
      item.count +=1;
    }

		else acc.push({ id,name,description,picture,detail, cost, subTotal,count });
		
		return acc;
    }, []);
    console.log(this.shoppingCart);
    this.shoppingCart=group(this.products);
    console.log(this.shoppingCart);
  }
  

}
