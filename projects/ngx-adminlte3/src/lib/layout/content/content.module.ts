import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxLTE3LayoutContenComponent } from './content.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [NgxLTE3LayoutContenComponent],
    declarations: [NgxLTE3LayoutContenComponent]
})
export class NgxLTE3ContentModule {}
