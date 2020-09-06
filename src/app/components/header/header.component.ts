import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit 
{
  @Input()  env ;
  cart: Product[] = [];
  totalDifItem:number;
  totalCost:number;
  constructor(private store: Store<{ items: Product[]; cart: []; totalDifCount:number; totalCost:number  }>) 
  {
    store.pipe(select('shoppingCart')).subscribe(data => (this.cart = data.cart,this.totalDifItem = data.totalDifItem,this.totalCost = data.totalCost )); 
  }
  ngOnInit() 
  {

  }

}
