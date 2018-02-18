// //TimetableComparer->TimetableComparer->TusurCalendarResolver.cs
// //andreygolubkow Андрей Голубков

using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Text;
using System.Threading.Tasks;

using Ical.Net;

using Microsoft.CodeAnalysis.CSharp.Syntax;

using TimetableComparer.Models;

namespace TimetableComparer.Core
{
    public class TusurTimetable: ITimetable
    {
        public async Task<Calendar> GetCalendar(Group group)
        {
            Calendar calendar;
            var request =
                    (HttpWebRequest)WebRequest.Create($"https://timetable.tusur.ru/faculties/{group.Faculty}/groups/{group.GroupNum}.ics");
            var response = (HttpWebResponse)await request.GetResponseAsync();
            using (Stream stream = response.GetResponseStream())
            {
                using (var reader = new StreamReader(stream))
                {
                    calendar = Calendar.Load(reader.ReadToEnd());
                }
            }

            response.Close();
            return calendar;
        }

        /// <inheritdoc />
        public List<LectureTime> GetLectureTimes()
        {
            var lectures = new List<LectureTime>
                           {
                                   new LectureTime(new Time(8,50),new Time(10,25) ),
                                   new LectureTime(new Time(10,40),new Time(12,15) ),
                                   new LectureTime(new Time(13,15),new Time(14,50) ),
                                   new LectureTime(new Time(15,00),new Time(16,35) ),
                                   new LectureTime(new Time(16,45),new Time(18,20) ),
                                   new LectureTime(new Time(18,30),new Time(20,05) ),
                                   new LectureTime(new Time(20,15),new Time(21,50) )
                           };
            return lectures;
        }
    }
}
