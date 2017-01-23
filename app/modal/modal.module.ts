import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import{ ModalComponents } from './modal.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

@NgModule({
    imports: [FormsModule,
    Ng2Bs3ModalModule
    ],
    declarations: [ModalComponents],
    exports: [ModalComponents],
    providers: []

})

export class ModaltModule { }