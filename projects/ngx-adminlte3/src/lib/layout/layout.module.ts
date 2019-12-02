import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxLTE3LayoutConfig } from './layout.config';
import { ngxLTE3LayoutProvider } from './layout.provider';
import { NgxLTE3HeaderModule } from './header/header.module';
import { NgxLTE3MainSidebarModule } from './main-sidebar/main-sidebar.module';
import { NgxLTE3WrapperModule } from './wrapper/wrapper.module';
import { NgxLTE3ControlSidebarModule } from './control-sidebar/control-sidebar.module';
import { NgxLTE3FooterModule } from './footer/footer.module';
import { NgxLTE3ContentModule } from './content/content.module';
import { RoutingService } from '../services/routing.service';


@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule],
    exports: [
        NgxLTE3HeaderModule,
        NgxLTE3MainSidebarModule,
        NgxLTE3WrapperModule,
        NgxLTE3ContentModule,
        NgxLTE3ControlSidebarModule,
        NgxLTE3FooterModule
    ],
    providers: [RoutingService]
})
export class NgxLTE3LayoutModule {
    /**
     * @method constructor
     * @param parentModule NgxLTE3LayoutModule
     */
    constructor(@Optional() @SkipSelf() parentModule: NgxLTE3LayoutModule) {
        if (parentModule) {
            throw new Error('NgxLTE3LayoutModule is already loaded. Import it in the AppModule only!');
        }
    }

    /**
     * [forRoot description]
     * @method forRoot
     * @param  layoutConfig [description]
     * @return [description]
     */
    static forRoot(layoutConfig: NgxLTE3LayoutConfig): ModuleWithProviders {
        return {
            ngModule: NgxLTE3LayoutModule,
            providers: [...ngxLTE3LayoutProvider(layoutConfig)]
        };
    }
}
