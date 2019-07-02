import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from "@angular/http";


@Component({
  selector: 'app-movie-review',
  templateUrl: './movie-review.component.html',
  styleUrls: ['./movie-review.component.css']
})
export class MovieReviewComponent implements OnInit {
  movie: Object;
  constructor(private route: ActivatedRoute, private http: Http) { }

  getMovie() {
    const { movieId } = this.route.queryParams.value;
    const url = `http://www.omdbapi.com/?i=${movieId}&apikey=e8434e3b`;
    return this.http.get(url).map((response : Response) => {
      return response.json();
    });
  }


  async ngOnInit() {
    this.getMovie().subscribe(data => {
      this.movie = data
    })
  }

  reviews = []
  movieReview(title,content){
    let review = {"title": title.value, "content": content.value};
    if(localStorage.getItem("reviews")){
      this.reviews = JSON.parse(localStorage.getItem("reviews"))
    }
    this.reviews.push(review);
    localStorage.setItem("reviews",JSON.stringify(this.reviews));
    title.value="";
    content.value="";
    alert("Review Submitted");
  }

}
