import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MovieServiceService } from '../../service/movie-service.service';
import { FormsModule } from '@angular/forms';
import { HoursPipe } from '../../pipe/hours.pipe';
import { Movie } from '../../model/movie';
import { Router, RouterModule } from '@angular/router';
import { CustomCurrencyPipe } from '../../pipe/custom-currency.pipe';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, HoursPipe, RouterModule, CustomCurrencyPipe],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent implements OnInit {

  movies: Movie[] = [];
  moviesToDisplay: Movie[] = [];
  title: string = "";
  releaseYear: string = "";

  constructor(private service: MovieServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getMovies().subscribe((resp: Movie[]) => {
      this.moviesToDisplay = resp;
      this.movies = resp;
    })
  }

  searchByTitleAndReleaseYear(): void {
    const title = this.title.toLowerCase().trim();
    const releaseYear: string = this.releaseYear.trim();
    if (title || releaseYear) {
      this.moviesToDisplay = this.movies.filter((ele: Movie) => ele.title.toLowerCase().includes(title ?? "") && this.extractYear(ele.release_date).includes(releaseYear ?? ""));
    }
    else {
      this.moviesToDisplay = this.movies;
    }
  }

  extractYear(year: string): string {
    return year.substring(0, 4);
  }

  naviagteMovieDetail(id: string): void {
    this.router.navigate(["movies/" + id])
  }
}
