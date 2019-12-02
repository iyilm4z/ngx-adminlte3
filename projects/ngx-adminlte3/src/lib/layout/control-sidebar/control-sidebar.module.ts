import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxLTE3ControlSidebarComponent } from './control-sidebar.component';
import { NgxLTE3ControlCustomizeComponent } from './control-customize-adminlte.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [NgxLTE3ControlSidebarComponent, NgxLTE3ControlCustomizeComponent],
    declarations: [NgxLTE3ControlSidebarComponent, NgxLTE3ControlCustomizeComponent]
})
export class NgxLTE3ControlSidebarModule {}
