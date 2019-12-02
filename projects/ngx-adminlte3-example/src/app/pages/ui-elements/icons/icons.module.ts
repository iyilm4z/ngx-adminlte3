import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsRoutingModule } from './icons-routing.module';
import { IconsComponent } from './icons.component';
import { NgxLTE3SectionModule } from 'ngx-adminlte3';


@NgModule({
  imports: [CommonModule, IconsRoutingModule, NgxLTE3SectionModule],
  declarations: [IconsComponent]
})
export class IconsModule {}
