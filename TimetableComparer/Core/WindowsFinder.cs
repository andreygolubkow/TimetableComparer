// //TimetableComparer->TimetableComparer->WindowsFinder.cs
// //andreygolubkow Андрей Голубков

using System;
using System.Collections.Generic;
using System.Linq;

using Ical.Net;
using Ical.Net.DataTypes;

using TimetableComparer.Models;

namespace TimetableComparer.Core
{
    public class WindowsFinder
    {
        private const int CalendarStep = 1;
        
        public ITimetable Timetable { get; set; }
        
        public Dictionary<Group, Calendar> Calendars { get; set; } = new Dictionary<Group, Calendar>();

        public DateTime StartDate { get; set; }
        
        public DateTime EndDate { get; set; }

        public List<DayTimetable> FindWindows()
        {
            var days = new List<DayTimetable>();
            //Получим общий календарь.
            foreach (var record in Calendars)
            {
                var calendar = record.Value;
                //Берем дату
                for (DateTime date = StartDate; date <= EndDate; date = date.AddDays(CalendarStep))
                {
                    //Берем данные на этот день
                    var todayCalendar = calendar.Events.Where(e => e.DtStart.Date==date);

                    //Берем список лекций
                    var freeLectures = new List<LectureTime>(Timetable.GetLectureTimes());

                    foreach (var ev in todayCalendar)
                    {
                        var startTime = ev.Start;
                        var endTime = ev.End;

                        for (int i = 0; i < freeLectures.Count; i++)
                        {

                            var freeLectureTime = new CalDateTime(startTime.Year,
                                                                  startTime.Month,
                                                                  startTime.Day,
                                                                  freeLectures[i].StartTime.Hours,
                                                                  freeLectures[i].StartTime.Minuts,
                                                                  0,
                                                                  startTime.TzId);

                            if ( startTime.Ticks <= freeLectureTime.Ticks && freeLectureTime.Ticks <= endTime.Ticks )
                            {
                                var lecture = new Lecture
                                              {
                                                      Description = ev.Description,
                                                      Location = ev.Location,
                                                      Name = ev.Summary,
                                                      Group = record.Key
                                              };

                                freeLectures[i].Lectures.Add(lecture);
                                break;
                            }
                        }
                    }

                    var day = days.FirstOrDefault(d => d.Date == date);
                    if ( day == null )
                    {
                        day = new DayTimetable();
                        day.Date = date;
                        days.Add(day);
                    }

                    foreach (LectureTime freeLecture in freeLectures)
                    {
                        LectureTime lecture = day.Lectures.FirstOrDefault(l => l.StartTime.Equals(freeLecture.StartTime));
                        if ( lecture == null )
                        {
                            day.Lectures.Add(freeLecture);
                            continue;
                        }
                        lecture.Lectures.AddRange(freeLecture.Lectures);
                    }   
                }
            }

            return days;
        }
           
    }
}
