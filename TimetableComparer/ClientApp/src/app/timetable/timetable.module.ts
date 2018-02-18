import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {NgbDropdownModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {TimetableComponent} from './timetable.component';
import {TimetableRoutingModule} from './timetable-routing.module';
import {SharedPipesModule} from '../shared';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        TimetableRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot(),
        NgbModule.forRoot(),
        FormsModule
    ],
    declarations: [TimetableComponent]
})
export class TimetableModule {}
