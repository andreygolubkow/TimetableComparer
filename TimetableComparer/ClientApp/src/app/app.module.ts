import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppMainViewComponent } from './app-main-view/app-main-view.component';
import {AppMainViewModule} from './app-main-view/app-main-view.module';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule.forRoot(),
    AppMainViewModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
