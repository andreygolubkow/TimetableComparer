// //TimetableComparer->TimetableComparer->DayLectures.cs
// //andreygolubkow Андрей Голубков

using System;
using System.Collections.Generic;

namespace TimetableComparer.Models
{
    public class DayLectures
    {
        public DateTime Date { get; set; }
        
        public List<LectureTime> Lectures { get; set; } = new List<LectureTime>();
    }
}
