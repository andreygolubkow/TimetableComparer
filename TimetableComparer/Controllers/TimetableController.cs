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

namespace TimetableComparer.Controllers
{
    [Route("api/[controller]")]
    public class TimetableController : Controller
    {
        [HttpGet()]
        public IActionResult GetCurrentWeekNum()
        {
            return Json(new GregorianCalendar(GregorianCalendarTypes.Localized).GetWeekOfYear(DateTime.Now, CalendarWeekRule.FirstFourDayWeek, DayOfWeek.Monday));
        }
        
        [HttpPost("{weekNum}")]
        public async Task<IActionResult> GetFreeLectures(int weekNum,[FromBody] Group[] groups)
        {
            var windows = new WindowsFinder();

            foreach (var group in groups)
            {
                windows.Calendars.Add(await TusurCalendarResolver.GetCalendar(group));    
            }

            var startWeekDate = DateTools.GetStartWeekDate(weekNum);

            windows.StartDate = startWeekDate;
            windows.EndDate = startWeekDate.AddDays(7);

            windows.LectureTimes = LectureTime.GetTusurLectureTimes();

            var freeLectures = windows.FindWindows();
            
            return Json(freeLectures);
        }
        
    }
}
