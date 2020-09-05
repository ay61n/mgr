import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit 
{
  cart: Product[] = [];
  totalDifItem;
  constructor(private store: Store<{ items: Product[]; cart: []; totalDifCount:number }>) 
  {
    store.pipe(select('shop')).subscribe(data => (this.cart = data.cart,this.totalDifItem = data.totalDifItem)); 
  }
  ngOnInit() 
  {

  }

}
