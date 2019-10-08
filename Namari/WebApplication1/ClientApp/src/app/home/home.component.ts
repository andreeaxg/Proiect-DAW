import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    isLoggedIn: Boolean;

    constructor(private router: Router, ) {
        if (localStorage.getItem("token"))
            this.isLoggedIn = true;
        else
            this.isLoggedIn = false;
    }

    ngOnInit() {
    }

    addMeeting() {
        this.router.navigate(['/add-meeting']);
    }

    seeMeetings() {
        this.router.navigate(['/meetings']);
    }
}
