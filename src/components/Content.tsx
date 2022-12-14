import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { api } from '../services/api';


interface GenreResponseProps {
  id: number;
  title: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface SelectedGenreProps {
  genreName: string;
  movies: Array<MovieProps>
}



export function Content(props: SelectedGenreProps) {

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {props.genreName}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {props.movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}