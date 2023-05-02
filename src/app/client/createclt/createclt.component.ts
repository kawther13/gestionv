import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createclt',
  templateUrl: './createclt.component.html',
  styleUrls: ['./createclt.component.css']
})
export class CreatecltComponent implements OnInit{
  ClientForm: Client = {
    ID_CLT: 0,
    NOM: "",
      
    }
 
 
  constructor(private clientieService:ClientService,
    private router:Router) {}
 
  ngOnInit(): void { 
  }
 
 
  create(){
    this.clientieService.create(this.ClientForm)
    .subscribe({
      next:(_data) => {
        this.router.navigate(["../client/home"])
      },
      error:(err) => {
        console.log(err);
        console.log( this.ClientForm);
      }
    })
  }
}


