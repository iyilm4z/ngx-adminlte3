import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralRoutingModule } from './general-routing.module';
import { GeneralComponent } from './general.component';
import { NgxLTE3SectionModule } from 'ngx-adminlte3';


@NgModule({
  imports: [CommonModule, GeneralRoutingModule, NgxLTE3SectionModule],
  declarations: [GeneralComponent]
})
export class GeneralModule {}
