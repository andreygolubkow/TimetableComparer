// //TimetableComparer->TimetableComparer->LectureTime.cs
// //andreygolubkow Андрей Голубков

using System;
using System.Collections.Generic;

namespace TimetableComparer.Models
{
    public class LectureTime
    {
        public const char Delimitter = ':';
        
        public LectureTime()
        {
        }

        public LectureTime(string time)
        {
            Time = time;
        }
        
        public int Hours { get; set; }
        
        public int Minuts { get; set; }

        public string Time
        {
            get => Hours.ToString() + Delimitter + (Minuts>9 ? Minuts.ToString() : "0" + Minuts);
            set
            {
                Hours = Convert.ToInt32(value.Substring(0,value.IndexOf(Delimitter)));
                Minuts = Convert.ToInt32(value.Substring(value.IndexOf(Delimitter)+1,value.Length-value.IndexOf(Delimitter)-1));    
            }
        }

        public static List<LectureTime> GetTusurLectureTimes()
        {
            var lectures = new List<LectureTime>
                           {
                                   new LectureTime("08:50"),
                                   new LectureTime("10:40"),
                                   new LectureTime("13:15"),
                                   new LectureTime("15:00"),
                                   new LectureTime("16:45"),
                                   new LectureTime("18:30"),
                                   new LectureTime("20:15")
                           };
            return lectures;
        }
    }
}
