import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { ReceiveComponent } from './receive.component';
import { ReceiveRoutingModule } from './receive.routing.module';

@NgModule({
  imports: [ CommonModule,ReceiveRoutingModule],
  declarations: [ReceiveComponent],
  exports: [ReceiveComponent],
  providers: []

})

export class ReceiveModule{ }