import { Component, OnInit } from '@angular/core';
import {TimetableService} from '../shared/services/TimetableService';
import {DayTimetable} from '../shared/models/DayTimetable';
import {_throw} from 'rxjs/observable/throw';
import {Group} from '../shared/models/Group';
import {LectureTime} from '../shared/models/LectureTime';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-timetable',
    templateUrl: './timetable.component.html',
    styleUrls: ['./timetable.component.scss'],
    providers: [TimetableService, NgbCarouselConfig]
})
export class TimetableComponent implements OnInit {
    public Timetable: DayTimetable[] = [];
    public Lectures: LectureTime[] = [];

    constructor(private _timetable: TimetableService) {
    }

    ngOnInit() {
        const g = new Group();
        g.faculty = 'fvs';
        g.groupNum = '515-2';
        const g2 = new Group();
        g2.faculty = 'fvs';
        g2.groupNum = '515-1';
        this._timetable.GetTimetable([g,g2], 7).subscribe(data => {
            this.Timetable = data;
        });
    }
}
