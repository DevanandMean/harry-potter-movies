import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieServiceService } from '../../service/movie-service.service';
import { MovieDetail } from '../../model/movieDetail';
import { CommonModule } from '@angular/common';
import { HoursPipe } from '../../pipe/hours.pipe';
import { CustomCurrencyPipe } from '../../pipe/custom-currency.pipe';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, HoursPipe, CustomCurrencyPipe],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {

  movieId: string = "";
  movieDetail!: MovieDetail;

  constructor(private route: ActivatedRoute, private service: MovieServiceService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = params['movieId'];
      this.service.getMovieDetail(this.movieId).subscribe((resp: MovieDetail) => {
        this.movieDetail = resp;
      })
    });
  }

  back() {
    this.router.navigate(["movies"])
  }
}
