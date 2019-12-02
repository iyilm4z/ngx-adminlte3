import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxLTE3FooterComponent } from './footer.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [NgxLTE3FooterComponent],
    declarations: [NgxLTE3FooterComponent]
})
export class NgxLTE3FooterModule {}
