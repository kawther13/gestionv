import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from './categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  constructor(private http: HttpClient) {}
  get() {
    return this.http.get<Categorie[]>('http://localhost:3000/categorie');
  }
  create(payload: Categorie) {
    return this.http.post<Categorie>('http://localhost:3000/categorie', payload);
  }
  getById(id: number) {
    return this.http.get<Categorie>(`http://localhost:3000/categorie${id}`);
   }
    
   update(payload:Categorie){
    return this.http.put(`http://localhost:3000/article/${payload.ID_CAT}`,payload);
   }
   delete(id:number){
    return this.http.delete<Categorie>(`http://localhost:3000/categorie/${id}`);
 }
}
