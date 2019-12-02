import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxLTE3MainSidebarComponent, NgxLTE3MainSidebarUserPanelComponent, NgxLTE3MainSidebarMenuTreeViewComponent } from './main-sidebar.component';
import { NgxLTE3CollapseModule } from '../../collapse/collapse.module';
import { NgxLTE3SidebarMenuComponent } from './sidebar-menu.component';

@NgModule({
    imports: [CommonModule, RouterModule, NgxLTE3CollapseModule.forRoot()],
    exports: [NgxLTE3MainSidebarComponent, NgxLTE3MainSidebarUserPanelComponent, NgxLTE3MainSidebarMenuTreeViewComponent, NgxLTE3SidebarMenuComponent],
    declarations: [NgxLTE3MainSidebarComponent, NgxLTE3MainSidebarUserPanelComponent, NgxLTE3MainSidebarMenuTreeViewComponent, NgxLTE3SidebarMenuComponent]
})
export class NgxLTE3MainSidebarModule {}
