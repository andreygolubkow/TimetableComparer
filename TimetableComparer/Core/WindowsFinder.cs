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
        
        public List<LectureTime> LectureTimes { get; set; } = new List<LectureTime>();
        
        public List<Calendar> Calendars { get; set; } = new List<Calendar>();

        public DateTime StartDate { get; set; }
        
        public DateTime EndDate { get; set; }

        public List<DayLectures> FindWindows()
        {
            var days = new List<DayLectures>();
            var calendar = new Calendar();
            //Получим общий календарь.
            foreach (Calendar cal in Calendars)
            {
                calendar.Events.AddRange(cal.Events);    
            }
            //Берем дату
            for (DateTime date = StartDate; date <= EndDate; date=date.AddDays(CalendarStep))
            {
                //Берем данные на этот день
                var todayCalendar = calendar.GetOccurrences(date);

                //Берем список лекций
                var freeLectures = new List<LectureTime>(LectureTimes);

                foreach (var ev in todayCalendar)
                {
                    //Убираем из лекций занятые часы.
                    var startTime = ev.Period.StartTime;
                    var endTime = ev.Period.EndTime;

                    for (int i = 0; i < freeLectures.Count; i++)
                    {
                        
                        var freeLectureTime =  new CalDateTime(startTime.Year,
                                                           startTime.Month,
                                                           startTime.Day,
                                                           freeLectures[i].Hours,
                                                           freeLectures[i].Minuts,0,
                                                               startTime.TzId);
                        
                        if ( startTime.Ticks <= freeLectureTime.Ticks && freeLectureTime.Ticks <= endTime.Ticks )
                        {    
                                //Часы пересекаются, нужно удалить время.
                                freeLectures.RemoveAt(i);
                                i--;
                        }
                    }
                }
                var dayLectures = new DayLectures();
                dayLectures.Date = date;
                dayLectures.Lectures = new List<LectureTime>(freeLectures);
                days.Add(dayLectures);
            }
            return days;
        }
           
    }
}
