import { Component, inject, OnInit } from '@angular/core';
import { Imovies } from '../imovies';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  moviesList: Movies[] = [];
  imgBasic: string = 'https://image.tmdb.org/t/p/w500';
  private readonly imovies = inject(Imovies);

  ngOnInit(): void {
    this.getmovies();
  }

  getmovies() {
    this.imovies.getmovies().subscribe({
      next: (res) => {
        this.moviesList = res.results;
      },
      error: (err) => {
        alert(err);
      },
    });
  }
}
