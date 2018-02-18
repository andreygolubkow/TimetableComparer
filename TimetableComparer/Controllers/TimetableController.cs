// //TimetableComparer->TimetableComparer->CalendarController.cs
// //andreygolubkow Андрей Голубков

using System;
using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;

using Ical.Net;

using Microsoft.AspNetCore.Mvc;

using TimetableComparer.Core;
using TimetableComparer.Models;

using Calendar = Ical.Net.Calendar;

namespace TimetableComparer.Controllers
{
    [Route("api/[controller]")]
    public class TimetableController : Controller
    {
        private TusurTimetable _timetable = new TusurTimetable();
        
        [HttpGet("week")]
        public IActionResult GetCurrentWeekNum()
        {
            return Json(new GregorianCalendar(GregorianCalendarTypes.Localized).GetWeekOfYear(DateTime.Now, CalendarWeekRule.FirstFourDayWeek, DayOfWeek.Monday));
        }

        [HttpGet("lectures")]
        public IActionResult GetLectureTime()
        {
            return Json(_timetable.GetLectureTimes());
        }
        
        [HttpPost("{weekNum}")]
        public async Task<IActionResult> GetFreeLectures(int weekNum,[FromBody] Group[] groups)
        {
            var windows = new WindowsFinder();
            var calendarDictionary = new Dictionary<Group,Calendar>();
            
            foreach (Group group in groups)
            {
                calendarDictionary.Add(group,await _timetable.GetCalendar(group));
            }

            windows.Calendars = calendarDictionary;

            var startWeekDate = DateTools.GetStartWeekDate(weekNum);

            windows.StartDate = startWeekDate;
            windows.EndDate = startWeekDate.AddDays(6);

            windows.Timetable = _timetable;

            var freeLectures = windows.FindWindows();
            
            return Json(freeLectures);
        }
        
    }
}
