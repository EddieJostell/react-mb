import React, { useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import './MovieContainer.css';
import { IMovieCard } from '../../movies';
import MovieCard from '../MovieCard/MovieCard';
import Header from '../Header/Header';

export interface IMovieContainerProps {
  children?: React.ReactNode;
  localMovieList: IMovieCard[];
}

export const MovieContainer = (props: IMovieContainerProps) => {
  const { localMovieList } = props;

  const showMoviesFromLocalDb = (movieList: any) => {
    const myLocalMovies = localMovieList.map((movie: IMovieCard, key: any) => {
      return <MovieCard key={key} localMovieInfo={movie} />;
    });

    return myLocalMovies;
  };

  return (
    <Row className='movieContainer'>
      <Col>
        <Row>
          <Col>
            <Header size='h1' title='<--- Movies from API HERE --->' />
          </Col>
        </Row>
      </Col>
      <Row>{showMoviesFromLocalDb(localMovieList)}</Row>
    </Row>
  );
};

export default MovieContainer;
