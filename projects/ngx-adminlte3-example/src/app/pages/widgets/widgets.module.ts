import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsComponent } from './widgets.component';
import { WidgetsRoutingModule } from './widgets-routing.module';
import { NgxLTE3SectionModule } from 'projects/ngx-adminlte3/src/lib/layout/section/section.module';


@NgModule({
  imports: [CommonModule, NgxLTE3SectionModule, WidgetsRoutingModule],
  declarations: [WidgetsComponent]
})
export class WidgetsModule {}
