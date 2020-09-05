import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProComment } from '../Models/ProComment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  path:string="https://my-json-server.typicode.com/ay61n/product/productComments";
  constructor(private httpC:HttpClient) { }

  getById(id:any):Observable<ProComment>
  {
    return this.httpC.get<ProComment>(this.path+"/"+id)
  }
  getAll():Observable<ProComment[]>
  {
    return this.httpC.get<ProComment[]>(this.path);
  }
  insert(T: any) 
  {
    return this.httpC.post(this.path,T);
  }
  delete(id: any) 
  {
    return this.httpC.post(this.path,id);
  }
  update(id: any, T: any) 
  {
    return this.httpC.put(this.path+"/"+id,T);
  }
}
