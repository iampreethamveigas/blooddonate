import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import {NavbarModule } from './navbar/navbar.module';
import {SlideModule } from './slider/slider.module';
import {ContentModule } from './content/content.module';
import {ModaltModule } from './modal/modal.module';
import {RegisterModule } from './register/register.module';
import {ReceiveModule } from './receive/receive.module';
import {ReceiveComponent } from './receive/receive.component';
import {RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {path:" ", component: RegisterComponent},
    {path:"Receive" , component: ReceiveComponent}
];

@NgModule({
  imports:      [ BrowserModule ,
  [RouterModule.forRoot(routes)],
                 NavbarModule,
                 SlideModule,
                 ContentModule,
                 ModaltModule,
                 RegisterModule,
                 ReceiveModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
