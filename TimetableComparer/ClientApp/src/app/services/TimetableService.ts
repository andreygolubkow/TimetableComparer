import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Group} from "../models/Group";
import {DayTimetable} from "../models/DayTimetable";

@Injectable()
export class TimetableService {

  constructor(private http: HttpClient) {
  }

  public GetCurrentWeekId(): Observable<number> {
    const num = this.http.get('api/timetable/');
    return <Observable<number >>num;
  }

  public GetTimetable(groups:Group[], weekId:number): Observable<DayTimetable[]> {
    const timetable = this.http.post(`api/timetable/${weekId}`,groups);
    return <Observable<DayTimetable[] >> timetable;
  }
}
