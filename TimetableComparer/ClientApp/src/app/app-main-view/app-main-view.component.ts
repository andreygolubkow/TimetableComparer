import { Component, OnInit } from '@angular/core';
import {TimetableService} from "../services/TimetableService";
import {Group} from "../models/Group";
import {DayTimetable} from "../models/DayTimetable";

@Component({
  selector: 'app-main-view',
  templateUrl: './app-main-view.component.html',
  styleUrls: ['./app-main-view.component.css'],
  providers: [TimetableService]
})
export class AppMainViewComponent implements OnInit {

  public CalendarData: string;
  private _currentWeekId: number;

  public AdvancedWeekId = false;

  public GroupNum:string;

  public WeekId:number;
  public Groups:Group[] = [];
  public DayTimetables: DayTimetable[] = [];

  constructor(private timetableService: TimetableService) { }

  ngOnInit() {
    this.timetableService.GetCurrentWeekId().subscribe(data => {
      this._currentWeekId = data;
      this.WeekId = this._currentWeekId;
    });
  }

  SetNextWeek() {
    this.WeekId = this._currentWeekId+1;
  }

  SetCurrentWeek() {
    this.WeekId = this._currentWeekId;
  }

  AddGroup() {
    const g = new Group();
    g.faculty = "fvs";
    g.groupNum = this.GroupNum;
    this.Groups.push(g);
    console.warn(this.Groups);
  }

  RemoveFromList(group) {
    this.Groups = this.Groups.filter(g => g != group);
  }

  SetAdvancedMode() {
    this.AdvancedWeekId = true;
    this.SetCurrentWeek();
  }

  LoadTimetable() {
    this.timetableService.GetTimetable(this.Groups,this.WeekId).subscribe(data => {
      this.DayTimetables = data;
    });
  }

}
