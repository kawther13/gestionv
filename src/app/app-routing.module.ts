import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './article/create/create.component';
import { EditComponent } from './article/edit/edit.component';


const routes: Routes = [ {
  path: '',
  redirectTo: 'article/home',
  pathMatch: 'full',
  
},
{
  path: 'article/create',
  component: CreateComponent,
},
{
  path:'article/edit/:id',
  component: EditComponent
}]
//{path:'home' HomeComponent:'article/home'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
