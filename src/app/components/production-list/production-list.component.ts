import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';
import { Store } from '@ngrx/store';
import { AddToCart, RemoveFromCart } from 'src/app/store/actions';
import { Router } from '@angular/router';
import { ToastrService, Toast } from 'ngx-toastr';

@Component({
  selector: 'app-production-list',
  templateUrl: './production-list.component.html',
  styleUrls: ['./production-list.component.css']
})
export class ProductionListComponent implements OnInit 
{
  products:Product[];

   options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "showDuration": "300",
    "hideDuration": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
    }
  

  constructor(  private proSer  : ProductService,
                private router  : Router,
                private toastr  : ToastrService,
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
    this.alertAdd(item);
  }

  removeFromCart(item: Product) 
  {
    this.store.dispatch(new RemoveFromCart(item));
  }
  openDetail(item: Product)
  {
    this.router.navigate(['/production/detail/'+item.id]);
  }
  alertAdd(item:Product) {
    this.toastr.success('Sepete Eklendi', item.name,this.options);
  }
}
