import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

import 'rxjs/Rx';



@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  searchMovieByTitle(title: String) {
    const url = 'http://www.omdbapi.com/?s=' +title+ '&apikey=e8434e3b';
    return this.http.get(url).map((response : Response) => {
      return response.json();
    });
  }
  constructor(private http: Http) { }
}
