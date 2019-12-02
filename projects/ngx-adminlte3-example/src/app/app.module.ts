import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxLTE3LayoutModule } from 'ngx-adminlte3';
import { LayoutMainComponent } from './layouts/main/main.component';
import { layoutConfig } from './config/layout.config';

@NgModule({
  declarations: [
    AppComponent,
    LayoutMainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxLTE3LayoutModule.forRoot(layoutConfig),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
