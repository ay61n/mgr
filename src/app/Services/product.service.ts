import { Injectable } from '@angular/core';
import { IRepository } from '../IRepository';
import { Product } from '../Models/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements IRepository<Product> 
{
  path:string="https://my-json-server.typicode.com/ay61n/product/products";
  constructor(private httpC:HttpClient) { }

  getById(id:any):Observable<Product>
  {
    return this.httpC.get<Product>(this.path+"/"+id)
  }
  getAll():Observable<Product[]>
  {
    return this.httpC.get<Product[]>(this.path);
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
