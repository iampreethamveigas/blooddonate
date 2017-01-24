import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {NavbarModule } from './navbar/navbar.module';
import {SlideModule } from './slider/slider.module';
import {ContentModule } from './content/content.module';
import {ModaltModule } from './modal/modal.module';
import {RegisterModule } from './register/register.module';
import {ReceiveModule } from './receive/receive.module';


@NgModule({
  imports:      [ BrowserModule,
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
