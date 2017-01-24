import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import{ ContentComponent } from './content.component';

// import {ContentRoutModule } from './content.routing.module';
// export const routes: Routes = [
//   { path: '', redirectTo: 'contact', pathMatch: 'full'},
//   { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
//   { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
// ];

const appRoutes : Routes =[
    {path:'', redirectTo: '/Register', pathMatch: 'full' },
    
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)
    ],
    declarations: [ContentComponent],
    exports:[ContentComponent],
    providers: []
})

export class ContentModule { }