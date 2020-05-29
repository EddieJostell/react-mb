import React, { useState } from 'react';
import {
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Card,
  CardImg,
  Button,
  Col,
} from 'reactstrap';
import './MovieCardSlim.css';
import { IApiMovieCard } from '../../movies';

export interface IMovieCardSlimProps {
  apiMovieInfo: IApiMovieCard;
}

interface IMovieCardSlimState extends IMovieCardSlimProps {
  isOpen?: boolean;
  toggle?: () => void;
}

export const MovieCard = (props: IMovieCardSlimState) => {
  const { apiMovieInfo } = props;

  const { Poster, Title, Year } = apiMovieInfo;

  const sendToLocalDB = () => {
    console.log('QWERTY');
  };

  return (
    <Col sm={4} md={2} className='pb-2'>
      <Card className='MovieCardSlim'>
        <CardImg
          className='MovieImg'
          src={
            Poster === 'N/A'
              ? 'https://placehold.it/198x264&text=Image+Not+Found'
              : Poster
          }
          alt={Title}
        />
        <CardBody>
          <CardTitle>{Title}</CardTitle>
          <CardSubtitle>Premier: {Year}</CardSubtitle>
          <Button onClick={sendToLocalDB}>Show More</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MovieCard;
