// //TimetableComparer->TimetableComparer->Time.cs
// //andreygolubkow Андрей Голубков

namespace TimetableComparer.Models
{
    public class Time
    {
        private const char Delimitter = ':';
        
        public Time() {}

        public Time(int hours, int minuts)
        {
            Hours = hours;
            Minuts = minuts;
        }
        
        
        public int Hours { get; set; }
        
        public int Minuts { get; set; }
        
        public override string ToString()
        {
            return Hours.ToString() + Delimitter + (Minuts>9 ? Minuts.ToString() : "0" + Minuts);
        }

        #region Equality members

        protected bool Equals(Time other)
        {
            return Hours == other.Hours && Minuts == other.Minuts;
        }

        /// <inheritdoc />
        public override bool Equals(object obj)
        {
            if ( ReferenceEquals(null, obj) )
                return false;
            if ( ReferenceEquals(this, obj) )
                return true;
            if ( obj.GetType() != this.GetType() )
                return false;
            return Equals((Time)obj);
        }

        /// <inheritdoc />
        public override int GetHashCode()
        {
            unchecked
            {
                return (Hours * 397) ^ Minuts;
            }
        }

        #endregion
    }
}
