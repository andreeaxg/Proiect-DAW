import { Component, OnInit } from '@angular/core';
import { Review } from '../models/review';
import { ReviewsService } from '../services/reviews.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialComponent implements OnInit {

    review = new Review();
    reviews: Review[];
    addReviewBool: Boolean;
    nameNotValid: Boolean;
    contentNotValid: Boolean;

    constructor(private reviewsService: ReviewsService) {
        reviewsService.getReviews().subscribe(res => {
            this.reviews = res;
        });
    }

    ngOnInit() {
    }

    trigger() {
        this.addReviewBool = !this.addReviewBool
    }

    addReview() {
        if (!this.review.name)
            this.nameNotValid = true;
        else
            this.nameNotValid = false;

        if (!this.review.content)
            this.contentNotValid = true;
        else
            this.contentNotValid = false;

        if (!this.nameNotValid && !this.contentNotValid) {
            this.review.date = new Date();
            this.reviewsService.postReview(this.review).subscribe(res => { });

            this.reviews.push(this.review);
            this.review = new Review();
            this.addReviewBool = false;
        }
    }
}
