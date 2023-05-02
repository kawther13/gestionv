import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';



import { CreatecltComponent } from './createclt/createclt.component';
import { EditcltComponent } from './editclt/editclt.component';
import { HomecltComponent } from './homeclt/homeclt.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   
    CreatecltComponent,
    EditcltComponent,
    HomecltComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule
  ]
})
export class ClientModule { }
