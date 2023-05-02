import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { CreatecltComponent } from './createclt/createclt.component';
import { EditcltComponent } from './editclt/editclt.component';
import { HomecltComponent } from './homeclt/homeclt.component';


@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    HomeComponent,
    CreatecltComponent,
    EditcltComponent,
    HomecltComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
