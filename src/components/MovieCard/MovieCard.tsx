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
import './MovieCard.css';
import MoreInfo from './MoreInfo/MoreInfo';
import { IMovieCard } from '../../movies';

export interface IMovieCardProps {
  localMovieInfo: IMovieCard;
}

interface IMovieCardState extends IMovieCardProps {
  isOpen?: boolean;
  toggle?: () => void;
}

export const MovieCard = (props: IMovieCardState) => {
  const { localMovieInfo } = props;

  const { Poster, Title, Year, imdbRating } = localMovieInfo;

  const [modal, setModal] = useState(false);

  const showMoreClick = () => {
    setModal(!modal);
  };

  return (
    <Col sm={4} md={2} className='pb-2'>
      <Card className='MovieCard'>
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
          <CardText>Imdb Rating: {imdbRating}</CardText>
          <Button onClick={showMoreClick}>Show More</Button>
        </CardBody>
      </Card>
      <MoreInfo
        isOpen={modal}
        handleClick={showMoreClick}
        localMovieInfo={localMovieInfo}
      />
    </Col>
  );
};

export default MovieCard;
