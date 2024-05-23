import { Routes } from '@angular/router';
import { MoviesListComponent } from './componnets/movies-list/movies-list.component';
import { MovieDetailsComponent } from './componnets/movie-details/movie-details.component';

export const routes: Routes = [
    { path:"movies", component:MoviesListComponent},
    { path: "movies/:movieId", component: MovieDetailsComponent},
    { path: "", redirectTo:"movies", pathMatch:'full'}
];
