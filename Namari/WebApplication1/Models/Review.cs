using System;

namespace WebApplication1.Models
{
    public class Review
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Content { get; set; }

        public DateTime Date { get; set; }
    }
}
