import React from 'react';
import { Col } from 'reactstrap';
import './MovieContainer.css';
import Header from '../Header/Header';

export interface IMovieContainerProps {
  children?: React.ReactNode;
}

export const MovieContainer = () => {
  return (
    <Col className='movieContainer'>
      <Header size='h3' title='Movie List' />
    </Col>
  );
};

export default MovieContainer;
