using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MeetingsController : ControllerBase
    {
        private readonly ProjectContext context;

        public MeetingsController(ProjectContext _context)
        {
            context = _context;
        }

        // GET: api/Meetings
        [HttpGet]
        [AllowAnonymous]
        public IEnumerable<Meeting> GetMeetings()
        {
            return context.Meeting.ToArray();
        }

        // GET: api/Meetings/5
        [HttpGet("{id}")]
        [AllowAnonymous]
        public Meeting GetMeeting(Guid id)
        {
            return context.Meeting.FirstOrDefault(x => x.Id == id);
        }

        // PUT: api/Meetings/5
        [HttpPut("{id}")]
        public void PutMeeting(Guid id, [FromBody]Meeting meeting)
        {
            Meeting dbMeeting = context.Meeting.FirstOrDefault(x => x.Id == id);
            dbMeeting.Name = meeting.Name;
            dbMeeting.Date = meeting.Date;
            dbMeeting.Description = meeting.Description;
            context.SaveChanges();
        }

        // POST: api/Meetings
        [HttpPost]
        [AllowAnonymous]
        public void PostMeeting([FromBody]Meeting meeting)
        {
            meeting.Id = Guid.NewGuid();
            context.Meeting.Add(meeting);
            context.SaveChanges();
        }

        // DELETE: api/Meetings/5
        [HttpDelete("{id}")]
        public void DeleteMeeting(Guid id)
        {
            context.Meeting.Remove(context.Meeting.FirstOrDefault(x => x.Id == id));
            context.SaveChanges();
        }
    }
}
