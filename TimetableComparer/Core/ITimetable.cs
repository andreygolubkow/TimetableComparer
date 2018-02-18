// //TimetableComparer->TimetableComparer->ITimetable.cs
// //andreygolubkow Андрей Голубков

using System.Collections.Generic;
using System.Threading.Tasks;

using Ical.Net;

using TimetableComparer.Models;

namespace TimetableComparer.Core
{
    public interface ITimetable
    {
        Task<Calendar> GetCalendar(Group group);

        List<LectureTime> GetLectureTimes();
    }
}
