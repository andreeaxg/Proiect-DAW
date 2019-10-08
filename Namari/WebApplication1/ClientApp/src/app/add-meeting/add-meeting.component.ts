import { Component, OnInit } from '@angular/core';
import { Meeting } from '../models/meeting';
import { MeetingsService } from '../services/meetings.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-meeting',
    templateUrl: './add-meeting.component.html',
    styleUrls: ['./add-meeting.component.css']
})
export class AddMeetingComponent implements OnInit {

    meeting = new Meeting();
    nameNotValid: Boolean;
    descriptionNotValid: Boolean;

    constructor(private meetingService: MeetingsService, private router: Router) { }

    ngOnInit() {
    }

    addMeeting() {
        if (!this.meeting.name)
            this.nameNotValid = true;
        else
            this.nameNotValid = false;

        if (!this.meeting.description)
            this.descriptionNotValid = true;
        else
            this.descriptionNotValid = false;

        if (!this.nameNotValid && !this.descriptionNotValid) {
            this.meeting.date = new Date();
            this.meetingService.postMeeting(this.meeting).subscribe(res => { });
            this.router.navigate(['/']);
        }
    }
}