import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxLTE3LayoutSectionComponent, NgxLTE3LayoutSectionHeaderComponent, NgxLTE3LayoutSectionContentComponent } from './section.component';
import { RoutingService } from '../../services/routing.service';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [NgxLTE3LayoutSectionComponent, NgxLTE3LayoutSectionHeaderComponent, NgxLTE3LayoutSectionContentComponent],
    declarations: [NgxLTE3LayoutSectionComponent, NgxLTE3LayoutSectionHeaderComponent, NgxLTE3LayoutSectionContentComponent],
    providers: [RoutingService]
})
export class NgxLTE3SectionModule {}
