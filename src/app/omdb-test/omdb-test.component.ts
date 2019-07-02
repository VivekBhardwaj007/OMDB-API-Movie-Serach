import { Component, OnInit } from '@angular/core';
import { OmdbService } from '../omdb.service';

@Component({
  selector: 'app-omdb-test',
  templateUrl: './omdb-test.component.html',
  styleUrls: ['./omdb-test.component.css']
})
export class OmdbTestComponent implements OnInit {
  title: String;
  result: Object;
  searchMovie(title: String){
    this.omdbService.searchMovieByTitle(title).subscribe((result) => {
      this.result = result; 
    });
  }


  constructor(private omdbService: OmdbService) { }

  ngOnInit() {
  }

}
