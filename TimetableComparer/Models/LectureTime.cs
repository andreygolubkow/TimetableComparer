// //TimetableComparer->TimetableComparer->LectureTime.cs
// //andreygolubkow Андрей Голубков

using System;
using System.Collections.Generic;

using NodaTime;

namespace TimetableComparer.Models
{
    public class LectureTime
    {
        public LectureTime()
        {
        }

        public LectureTime(Time startTime, Time endTime)
        {
            StartTime = startTime;
            EndTime = endTime;
        }

        public Time StartTime { get; set; }
        
        public Time EndTime { get; set; }
        
        public List<Lecture> Lectures { get; } = new List<Lecture>();

    }
}
