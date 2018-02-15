// //TimetableComparer->TimetableComparer->TusurCalendarResolver.cs
// //andreygolubkow Андрей Голубков

using System;
using System.IO;
using System.Net;
using System.Text;
using System.Threading.Tasks;

using Ical.Net;

using Microsoft.CodeAnalysis.CSharp.Syntax;

using TimetableComparer.Models;

namespace TimetableComparer.Core
{
    public static class TusurCalendarResolver
    {
        public static async Task<Calendar> GetCalendar(Group group)
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

    }
}
