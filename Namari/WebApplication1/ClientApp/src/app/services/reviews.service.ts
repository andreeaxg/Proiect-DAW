import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../models/review';

@Injectable()
export class ReviewsService {

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

    getReviews() {
        return this.http.get<Review[]>(this.baseUrl + `api/Reviews`);
    }

    getReview(reviewId: string) {
        return this.http.get<Review>(this.baseUrl + `api/Reviews/${reviewId}`);
    }

    postReview(review: Review) {
        return this.http.post<any>(this.baseUrl + `api/Reviews`, review);
    }

    putReview(review: Review) {
        return this.http.put<any>(this.baseUrl + `api/Reviews`, review);
    }

    deleteReview(reviewId: string) {
        return this.http.delete<any>(this.baseUrl + `api/Reviews/${reviewId}`);
    }
}