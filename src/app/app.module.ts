import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleModule } from './article/article.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientModule } from './client/client.module';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreatefactComponent } from './createfact/createfact.component';
import { CommandComponent } from './command/command/command.component';
import { ListComponent } from './command/list/list.component';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CreatefactComponent,
    CommandComponent,
    ListComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArticleModule,
    HttpClientModule,
    FormsModule,
    ClientModule,
    ReactiveFormsModule,
    NgxExtendedPdfViewerModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
