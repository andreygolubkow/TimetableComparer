// //TimetableComparer->TimetableComparer->Lecture.cs
// //andreygolubkow Андрей Голубков

using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace TimetableComparer.Models
{
    public class Lecture
    {
        public string Name { get; set; }
        
        public string Location { get; set; }
        
        public string Description { get; set; }
        
        public Group Group { get; set; }
    }
}
