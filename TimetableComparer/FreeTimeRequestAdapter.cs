// //TimetableComparer->TimetableComparer->FreeTimeRequestAdapter.cs
// //andreygolubkow Андрей Голубков

using System;
using System.Collections.Generic;

using TimetableComparer.Models;

namespace TimetableComparer
{
    public class FreeTimeRequestAdapter
    {
        public List<Group> Groups { get; set; }
        
        public DateTime StartDateTime { get; set; }
        
        public DateTime EndDateTime { get; set; }
    }
}
