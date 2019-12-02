import { NgModule, ModuleWithProviders } from '@angular/core';

import { NgxLTE3CollapseDirective } from './collapse.directive';

@NgModule({
  declarations: [NgxLTE3CollapseDirective],
  exports: [NgxLTE3CollapseDirective]
})
export class NgxLTE3CollapseModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: NgxLTE3CollapseModule, providers: [] };
  }
}
