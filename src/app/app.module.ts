import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResourceRegistry } from 'ngx-resource-factory/resource/resource-registry';


import { UserComponent } from './user.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    UserComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    ResourceRegistry
  ]
})
export class AppModule { }