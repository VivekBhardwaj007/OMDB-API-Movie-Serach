import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent implements OnInit {

  constructor() { }

  reviews = []

  ngOnInit() {
    this.reviews = JSON.parse(localStorage.getItem("reviews"));
    console.log(this.reviews);
  }

  removeReview(review){
    let index = this.reviews.indexOf(review);
    this.reviews.splice(index, 1);
    localStorage.setItem("reviews",JSON.stringify(this.reviews));
    alert("Review Deleted");
  }

}
