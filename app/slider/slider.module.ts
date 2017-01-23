import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlideComponent } from './slider.component';

@NgModule({
    imports: [CommonModule],
    declarations: [SlideComponent],
    exports: [SlideComponent],
    providers: []

})

export class SlideModule { }