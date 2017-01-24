import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {ReceiveComponent} from './receive.component';



const receiveRoutes : Routes=[
    {path:'Receive',component:ReceiveComponent}
];

@NgModule({
    imports:[RouterModule.forChild(receiveRoutes)],
    exports:[RouterModule]
})

export class ReceiveRoutingModule {}