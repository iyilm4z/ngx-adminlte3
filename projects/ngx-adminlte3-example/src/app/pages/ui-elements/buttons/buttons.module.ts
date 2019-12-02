import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsRoutingModule } from './buttons-routing.module';
import { ButtonsComponent } from './buttons.component';
import { NgxLTE3SectionModule } from 'ngx-adminlte3';


@NgModule({
  imports: [CommonModule, ButtonsRoutingModule, NgxLTE3SectionModule],
  declarations: [ButtonsComponent]
})
export class ButtonsModule {}
