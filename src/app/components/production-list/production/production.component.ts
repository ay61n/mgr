import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/Services/comment.service';
import { Product } from 'src/app/Models/Product';
import { ProComment } from 'src/app/Models/ProComment';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit 
{

  detail    :Product;
  comments  :ProComment[];
  say;

  constructor
  ( private proSer    :ProductService,
    private actRoute  :ActivatedRoute,
    private comSer    :CommentService) 
  { }

  ngOnInit() 
  {
    this.proSer.getAll().subscribe(data=>
      {
        this.detail=data.find(f=>f.id==Number(this.actRoute.snapshot.paramMap.get("id")));
        console.log(this.detail);
      })
    console.log(this.detail);


    this.comSer.getAll().subscribe(data=>
      {
        this.comments=data.filter(f=>f.productID==Number(this.actRoute.snapshot.paramMap.get("id")));
        console.log("this.comments");
        console.log(this.comments);
      })
  }
  displayCounter(say)
  {
    this.say=say;
    console.log(say);
  }

}
