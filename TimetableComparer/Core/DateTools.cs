// //TimetableComparer->TimetableComparer->DateTools.cs
// //andreygolubkow Андрей Голубков

using System;

namespace TimetableComparer.Core
{
    public static class DateTools
    {
        public static DateTime GetStartWeekDate(int weekNumber)
        {
            int currentYear = DateTime.Now.Year; // вычисляем текущий год
            var startDate = new DateTime(currentYear,1,4); // вычисляем опорную дату — 4 января текущего года
            int offsetToFirstMonday = startDate.DayOfWeek == DayOfWeek.Sunday ? 6 : (int)startDate.DayOfWeek - 1; // смещение к понедельнику первой недели текущего года, в днях
            int offsetToDemandedMonday = -offsetToFirstMonday + 7 * (weekNumber-1); // смещение к искомому понедельнику, в днях
            var mondayOfTheWeek = startDate + new TimeSpan( offsetToDemandedMonday, 0, 0, 0); // вычисляем дату искомого понедельника
            return mondayOfTheWeek;
        }
        
        
    }
}
