import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';

import { DashboradComponent } from './dashborad/dashborad.component';
import { OmdbTestComponent } from './omdb-test/omdb-test.component';
import { OmdbService } from './omdb.service';
import { NgxPaginationComponent } from './ngx-pagination/ngx-pagination.component';
import { MovieReviewComponent } from './movie-review/movie-review.component';
import { HttpModule } from '@angular/http';


const appRoutes:Routes = [
  { path : 'home', component : HomeComponent },
  { 
      path : 'signup', component : UserComponent,
      children : [{ path : '', component : SignUpComponent }]
  },
  { 
      path : 'login', component : UserComponent,
      children : [{ path : '', component : SignInComponent }]
  },
  { path : 'explore', component : OmdbTestComponent },
  { path : 'omdb1', component : NgxPaginationComponent },
  { path : 'movie', component : MovieReviewComponent },
  {path: 'dashboard', component: DashboradComponent},
  { path : '', redirectTo : '/login', pathMatch : 'full' }
]

@NgModule({
  declarations: [
    AppComponent, SignInComponent, UserComponent, SignUpComponent, HomeComponent, DashboradComponent, OmdbTestComponent, MovieReviewComponent, NgxPaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [
    OmdbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
