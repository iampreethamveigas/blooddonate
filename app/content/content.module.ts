import { NgModule } from '@angular/core';

import{ ContentComponent } from './content.component';
import {ReceiveComponent } from './receive/receive.component';
import {RegisterComponent } from './register/register.component';
import {RegisterModule } from './register/register.module';
import {ReceiveModule } from './receive/receive.module';
// import {ContentRoutModule } from './content.routing.module';
// export const routes: Routes = [
//   { path: '', redirectTo: 'contact', pathMatch: 'full'},
//   { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
//   { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
// ];

export const routes: Routes = [
  {path:" ", component: RegisterComponent},
    {path:"Receive" , component: ReceiveComponent}
];
@NgModule({
    imports: [  RouterModule.forRoot(routes),
          RegisterModule,
          ReceiveModule
    ],
    declarations: [ContentComponent,RegisterComponent,ReceiveComponent],
    exports:[ContentComponent],
    providers: []

})

export class ContentModule { }