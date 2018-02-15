import {NgModule} from '@angular/core';
import {AppMainViewComponent} from './app-main-view.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [NgbModule.forRoot()],
  declarations: [ AppMainViewComponent],
  exports: [ AppMainViewComponent],
  entryComponents: [ AppMainViewComponent]
})
export class AppMainViewModule {}
