import {NgModule} from '@angular/core';
import {AppMainViewComponent} from './app-main-view.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [NgbModule.forRoot(),CommonModule, BrowserModule, FormsModule],
  declarations: [ AppMainViewComponent],
  exports: [ AppMainViewComponent],
  entryComponents: [ AppMainViewComponent]
})
export class AppMainViewModule {}
