import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CalendarService {

  constructor(private http: HttpClient) {
  }

  public GetCalendar(): Observable<string> {
    const calendar = this.http.get('https://timetable.tusur.ru/faculties/fvs/groups/515-2.ics');
    return <Observable<string >> calendar;
  }
}
