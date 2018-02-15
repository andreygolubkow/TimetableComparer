import { Component, OnInit } from '@angular/core';
import {CalendarService} from '../services/CalendarService';

@Component({
  selector: 'app-main-view',
  templateUrl: './app-main-view.component.html',
  styleUrls: ['./app-main-view.component.css'],
  providers: [CalendarService]
})
export class AppMainViewComponent implements OnInit {

  public CalendarData: string;

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
  }

  LoadButtonClick() {
    this.calendarService.GetCalendar().subscribe(data => {
      this.CalendarData = data;
    });
  }
}
