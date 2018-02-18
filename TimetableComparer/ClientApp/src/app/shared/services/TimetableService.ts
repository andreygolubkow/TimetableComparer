import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Group} from '../models/Group';
import {DayTimetable} from '../models/DayTimetable';
import {LectureTime} from '../models/LectureTime';

@Injectable()
export class TimetableService {

    constructor(private http: HttpClient) {
    }

    public GetCurrentWeekId(): Observable<number> {
        const num = this.http.get('/api/timetable/week');
        return <Observable<number >>num;
    }

    public GetLecturesTime(): Observable<LectureTime[]> {
        const lecs = this.http.get('/api/timetable/lectures');
        return <Observable<LectureTime[] >>lecs;
    }

    public GetTimetable(groups: Group[], weekId: number): Observable<DayTimetable[]> {
        const timetable = this.http.post(`/api/timetable/${weekId}`, groups);
        return <Observable<DayTimetable[] >> timetable;
    }

    public ResolveFaculty(group: string): string {
        switch (group[0]) {
            case '0': {
                return group[1] === '9' ? 'yuf' : 'fit';
            }
            case '1': {
                return 'rtf';
            }
            case '2': {
                return 'rkf';
            }
            case '3': {
                return 'fet';
            }
            case '4': {
                return 'fsu';
            }
            case '5': {
                return 'fvs';
            }
            case '6': {
                return 'gf';
            }
            case '7': {
                return 'fb';
            }
            case '8': {
                return 'ef';
            }
        }
    }
}

















