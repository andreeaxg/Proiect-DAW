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
    public class ReviewsController : ControllerBase
    {
        private readonly ProjectContext context;

        public ReviewsController(ProjectContext _context)
        {
            context = _context;
        }

        // GET: api/Reviews
        [HttpGet]
        [AllowAnonymous]
        public IEnumerable<Review> GetReviews()
        {
            return  context.Review.ToArray();
        }

        // GET: api/Reviews/5
        [HttpGet("{id}")]
        [AllowAnonymous]
        public Review GetReview(Guid id)
        {
            return context.Review.FirstOrDefault(x => x.Id == id);
        }

        // PUT: api/Reviews/5
        [HttpPut("{id}")]
        public void PutReview(Guid id, [FromBody]Review review)
        {
            Review dbReview = context.Review.FirstOrDefault(x => x.Id == id);
            dbReview.Name = review.Name;
            dbReview.Date = review.Date;
            dbReview.Content = review.Content;
            context.SaveChanges();
        }

        // POST: api/Reviews
        [HttpPost]
        [AllowAnonymous]
        public void PostReview([FromBody]Review review)
        {
            review.Id = Guid.NewGuid();
            context.Review.Add(review);
            context.SaveChanges();
        }

        // DELETE: api/Reviews/5
        [HttpDelete("{id}")]
        public void DeleteReview(Guid id)
        {
            context.Review.Remove(context.Review.FirstOrDefault(x => x.Id == id));
            context.SaveChanges();
        }
    }
}
