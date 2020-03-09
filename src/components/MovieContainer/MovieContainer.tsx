import React, { useEffect } from 'react';
import { Col, CardColumns, Row } from 'reactstrap';
import './MovieContainer.css';
import { IMovieCard } from '../../movies';
import MovieCard from '../MovieCard/MovieCard';

export interface IMovieContainerProps {
  children?: React.ReactNode;
  movieList: IMovieCard[];
}

export const MovieContainer = (props: IMovieContainerProps) => {
  const { children, movieList } = props;

  const showMovies = (movieList: any) => {
    const myLocalMovies = movieList.map((movie: any, key: any) => {
      return <MovieCard key={key} {...movie} />;
    });

    return myLocalMovies;
  };

  return <Row className='movieContainer'>{showMovies(movieList)}</Row>;
};

export default MovieContainer;
