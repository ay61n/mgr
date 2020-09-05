import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';
import { Store } from '@ngrx/store';
import { AddToCart, RemoveFromCart } from 'src/app/store/actions';

@Component({
  selector: 'app-production-list',
  templateUrl: './production-list.component.html',
  styleUrls: ['./production-list.component.css']
})
export class ProductionListComponent implements OnInit 
{
  products:Product[];
  //inCart = false;

  constructor(  private proSer  : ProductService,
                private store   : Store<{ items: []; cart: [] }>) 
  { }

  ngOnInit() 
  {
    this.proSer.getAll().subscribe(data=>
      {
        this.products=data;
        console.log(this.products);
      });
    
  }
  addToCart(item: Product) 
  {
    this.store.dispatch(new AddToCart(item));
    //this.inCart = true;
  }

  removeFromCart(item: Product) 
  {
    this.store.dispatch(new RemoveFromCart(item));
    //this.inCart = false;
  }
}
