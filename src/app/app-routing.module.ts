import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './article/create/create.component';
import { EditComponent } from './article/edit/edit.component';
import { HomeComponent } from './article/home/home.component';
import { CreatecltComponent } from './client/createclt/createclt.component';
import { EditcltComponent } from './client/editclt/editclt.component';
import { HomecltComponent } from './client/homeclt/homeclt.component';


const routes: Routes = [
  /* {
  path: '',
  redirectTo: 'article/home',
  pathMatch: 'full',}*/
{
  path: 'article/home',
  component: HomeComponent,
},

{ path: 'article/create', component: CreateComponent},
{path:'article/edit/:id', component: EditComponent},
{path: 'client/create',component: CreatecltComponent}
,{path:'client/edit/:id', component: EditcltComponent},
{
  path: 'client/home',
  component: HomecltComponent,
},
]
//{path:'home' HomeComponent:'article/home'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
