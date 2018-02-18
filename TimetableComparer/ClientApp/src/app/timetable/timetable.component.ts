import { Component, OnInit } from '@angular/core';
import {TimetableService} from '../shared/services/TimetableService';
import {DayTimetable} from '../shared/models/DayTimetable';

import {Group} from '../shared/models/Group';
import {LectureTime} from '../shared/models/LectureTime';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-timetable',
    templateUrl: './timetable.component.html',
    styleUrls: ['./timetable.component.scss'],
    providers: [TimetableService]
})
export class TimetableComponent implements OnInit {
    public Timetable: DayTimetable[] = [];

    public Groups: Group[] = [];

    pushRightClass = 'push-right';

    public Loading = false;

    public WeekId = 1;

    constructor(private _timetable: TimetableService) {
    }

    ngOnInit() {
        this._timetable.GetCurrentWeekId().subscribe(data => {
            this.WeekId = data;
        });
    }

    RemoveGroup(g: Group) {
        this.Groups = this.Groups.filter(gr => gr !== g);
    }

    LoadTimetable() {
        this.Loading = true;
        this._timetable.GetTimetable(this.Groups, this.WeekId).subscribe(data => {
            this.Timetable = data;
            this.Loading = false;
        });
    }

    WeekNext() {
        this.WeekId++;
        this.LoadTimetable();
    }

    WeekPrev() {
        this.WeekId--;
        this.LoadTimetable();
    }

    AddGroup(value: string) {
        if (value.length < 3) {
            return;
        }
        if ( this.Groups.filter(gr => gr.groupNum === value).length > 0 ) {
            return;
        }

        const g = new Group();
        g.groupNum = value;
        g.faculty = this._timetable.ResolveFaculty(value);
        this.Groups.push(g);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    isSmallScreen(): boolean {
        return window.innerWidth <= 992;
    }

    ShowMenu() {
        this.toggleSidebar();
    }
}
