import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProComment } from 'src/app/Models/ProComment';

@Component({
  selector: 'app-production-comment',
  templateUrl: './production-comment.component.html',
  styleUrls: ['./production-comment.component.css']
})
export class ProductionCommentComponent implements OnInit {

  @Input()  comments : ProComment[];
  @Output() yorumSay = new EventEmitter<number>();

  constructor() { }

  ngOnInit() 
  {
    if(this.comments!=undefined)
    {
      console.log(this.comments);
      let   count=this.comments.length;
      this.yorumSay.emit(count);
    }
  }
  ngOnChanges()
  {
    console.log(this.comments);
    let   count=this.comments.length;
    this.yorumSay.emit(count);
  }

}
