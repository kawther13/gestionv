import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { CreatecmdComponent } from './createcmd/createcmd.component';


@NgModule({
  declarations: [
    CreatecmdComponent
  ],
  imports: [
    CommonModule,
    CommandeRoutingModule
  ]
})
export class CommandeModule { }
