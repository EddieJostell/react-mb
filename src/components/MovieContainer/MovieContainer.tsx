import React from 'react';
import { Row, Col } from 'reactstrap';
import './MovieContainer.css';
import { IMovieCard, IApiMovieCard } from '../../movies';
import MovieCard from '../MovieCard/MovieCard';
import MovieCardSlim from '../MovieCardSlim/MovieCardSlim';
import Header from '../Header/Header';

export interface IMovieContainerProps {
  children?: React.ReactNode;
  localMovieList: IMovieCard[];
  apiMovieList: IApiMovieCard[];
}

export const MovieContainer = (props: IMovieContainerProps) => {
  const { localMovieList, apiMovieList } = props;

  const showMoviesFromLocalDb = (movieList: any) => {
    const myLocalMovies = localMovieList.map((movie: IMovieCard, key: any) => {
      return <MovieCard key={key} localMovieInfo={movie} />;
    });

    return myLocalMovies;
  };

  const showMoviesFromAPI = (api: any) => {
    const apiMovies = apiMovieList.map((api: IApiMovieCard, key: any) => {
      return <MovieCardSlim key={key} apiMovieInfo={api} />;
    });
    return apiMovies;
  };

  return (
    <Row className='movieContainer'>
      <Col>
        <Row>
          <Col>
            <Row>
              <Header size='h1' title='<--- Movies from API HERE --->' />
            </Row>
            <Row>{showMoviesFromAPI(apiMovieList)}</Row>
          </Col>
        </Row>
      </Col>
      <Row>{showMoviesFromLocalDb(localMovieList)}</Row>
    </Row>
  );
};

export default MovieContainer;
