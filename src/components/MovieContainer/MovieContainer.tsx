import React, { useEffect } from "react";
import { Row } from "reactstrap";
import "./MovieContainer.css";
import { IMovieCard } from "../../movies";
import MovieCard from "../MovieCard/MovieCard";

export interface IMovieContainerProps {
  children?: React.ReactNode;
  movieList: IMovieCard[];
}

export const MovieContainer = (props: IMovieContainerProps) => {
  const { movieList } = props;

  const showMovies = (movieList: any) => {
    const myLocalMovies = movieList.map((movie: IMovieCard, key: any) => {
      return <MovieCard key={key} movieInfo={movie} />;
    });

    return myLocalMovies;
  };

  return <Row className="movieContainer">{showMovies(movieList)}</Row>;
};

export default MovieContainer;
