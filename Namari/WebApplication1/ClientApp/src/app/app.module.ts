import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/angular-material.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TestimonialComponent } from './testimonials/testimonials.component';
import { AddMeetingComponent } from './add-meeting/add-meeting.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MeetingsService } from './services/meetings.service';
import { ReviewsService } from './services/reviews.service';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        AboutComponent,
        GalleryComponent,
        TestimonialComponent,
        AddMeetingComponent,
        MeetingsComponent,
        RegisterComponent,
        LoginComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        CoreModule,
        AngularMaterialModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'about', component: AboutComponent },
            { path: 'gallery', component: GalleryComponent },
            { path: 'testimonials', component: TestimonialComponent },
            { path: 'add-meeting', component: AddMeetingComponent },
            { path: 'meetings', component: MeetingsComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'login', component: LoginComponent },
        ])
    ],
    exports: [
        AngularMaterialModule
    ],
    providers: [
        MeetingsService,
        ReviewsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
