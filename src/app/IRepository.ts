import { Observable } from 'rxjs';

export interface IRepository<T>
{
    getById (id):Observable<T>;
    getAll  ()  :Observable<T[]>;
    insert  (T);
    delete  (id);
    update  (id,T);
}