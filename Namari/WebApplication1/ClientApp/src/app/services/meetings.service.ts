import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meeting } from '../models/meeting';

@Injectable()
export class MeetingsService {

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

    getMeetings() {
        return this.http.get<Meeting[]>(this.baseUrl + `api/Meetings`);
    }

    getMeeting(meetingId: string) {
        return this.http.get<Meeting>(this.baseUrl + `api/Meetings/${meetingId}`);
    }

    postMeeting(meeting: Meeting) {
        return this.http.post<any>(this.baseUrl + `api/Meetings`, meeting);
    }

    putMeeting(meeting: Meeting) {
        return this.http.put<any>(this.baseUrl + `api/Meetings`, meeting);
    }

    deleteMeeting(meetingId: string) {
        return this.http.delete<any>(this.baseUrl + `api/Meetings/${meetingId}`);
    }
}