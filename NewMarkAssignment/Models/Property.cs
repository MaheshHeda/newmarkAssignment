namespace NewMarkAssignment.Models
{

    public class Property
    {
        public string PropertyId { get; set; }
        public string PropertyName { get; set; }
        public List<string> Features { get; set; }
        public List<string> Highlights { get; set; }
        public List<TransportInfo> Transportation { get; set; }
        public List<Space> Spaces { get; set; }
    }
}
