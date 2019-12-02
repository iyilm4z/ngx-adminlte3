import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NgxLTE3SectionModule } from 'projects/ngx-adminlte3/src/lib/layout/section/section.module';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, NgxLTE3SectionModule],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
