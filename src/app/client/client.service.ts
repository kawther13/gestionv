import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private http: HttpClient) {}
  get() {
    return this.http.get<Client[]>('http://localhost:3000/client');
  }
  create(payload: Client) {
    return this.http.post<Client>('http://localhost:3000/client', payload);
  }
  getById(id: number) {
    return this.http.get<Client>(`http://localhost:3000/client${id}`);
   }
    
   update(payload:Client){
    return this.http.put(`http://localhost:3000/article/${payload.ID_CLT}`,payload);
   }
   delete(id:number){
    return this.http.delete<Client>(`http://localhost:3000/client/${id}`);
 }
}
