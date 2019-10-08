import { Component, OnInit } from '@angular/core';
import { Meeting } from '../models/meeting';
import { MeetingsService } from '../services/meetings.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

    meetings: Meeting[];

    constructor(private meetingsService: MeetingsService) {
        meetingsService.getMeetings().subscribe(res => {
            this.meetings = res;
        })
    }

    ngOnInit() {
    }

    deleteMeeting(meeting: Meeting) {
        this.meetingsService.deleteMeeting(meeting.id).subscribe(res => {
            this.meetings.splice(this.meetings.indexOf(meeting), 1);
        });
    }
}
