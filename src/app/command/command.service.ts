import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  constructor(private http: HttpClient) { }
 
 GetCustomer()   {       
  
   return this.http.get('http://localhost:8080/client');
  
 }
 GetCustomerbycode(code: any) {
   return this.http.get(`http://localhost:8080/client/${code}`);
 }
 GetProducts() {
   return this.http.get('http://localhost:8080/product');
 }
 GetProductbycode(id: any) {
   return this.http.get(`http://localhost:8080/product/${id}`);
 }

 GetAllInvoice(){
   return this.http.get('http://localhost:8080/Invoice/GetAllHeader');
 }

 GetInvHeaderbycode(invoiceno:any){
   return this.http.get('http://localhost:8080/Invoice/GetAllHeaderbyCode?invoiceno='+invoiceno);
 }
 GetInvDetailbycode(invoiceno:any){
   return this.http.get('http://localhost:8080/Invoice/GetAllDetailbyCode?invoiceno='+invoiceno);
 }
 RemoveInvoice(invoiceno:any){
   return this.http.delete('http://localhost:8080/Invoice/Remove?invoiceno='+invoiceno);
 }

 SaveInvoice(invoicedata:any){
   return this.http.post('http://localhost:8080/Invoice/Save',invoicedata);
 }

 GenerateInvoicePDF(invoiceno:any){
   return this.http.get('http://localhost:8080/Invoice/generatepdf?InvoiceNo='+invoiceno,{observe:'response',responseType:'blob'});
   
 }
 saveproduct(p:any){
  return this.http.post('http://localhost:8080/product',p);
}

}
