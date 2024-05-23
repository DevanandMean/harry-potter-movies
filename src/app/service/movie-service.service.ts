import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Movie } from '../model/movie';
import { Observable } from 'rxjs';
import { MovieDetail } from '../model/movieDetail';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  movieURL = "/movies";

  constructor(private http: HttpClient) { }

  getMovies():Observable<Movie[]>{
    return this.http.get<Movie[]>(this.movieURL);
  }

  getMovieDetail(id:string):Observable<MovieDetail>{
    return this.http.get<MovieDetail>(`${this.movieURL}/${id}`);
  }
}
