import React, { useState } from 'react';
import {
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Card,
  CardImg,
  Button,
  Col
} from 'reactstrap';
import './MovieCard.css';
import MoreInfo from './MoreInfo/MoreInfo';
import { IMovieCard } from '../../movies';

export interface IMovieProps {
  Title?: string;
  Year?: string;
  Rated?: string;
  Released?: string;
  Runtime?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Poster?: string;
  Ratings?: {}[];
  Metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  imdbID?: string;
  Type?: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
  Response?: string;
}

export interface IMovieCardProps {
  movieInfo: IMovieCard;
  isOpen: boolean;
  toggle: () => void;
  Title?: string;
  Year?: string;
  Poster?: string;
  imdbRating?: string;
}

export const MovieCard = (props: IMovieCardProps) => {
  const { movieInfo, Year, Title, imdbRating, Poster } = props;
  const [modal, setModal] = useState(false);

  const showMoreClick = () => {
    setModal(!modal);
  };

  return (
    <Col md={2} className='pb-2'>
      <Card className='MovieCard'>
        <CardImg className='MovieImg' src={Poster} alt={Title} />
        <CardBody>
          <CardTitle>{Title}</CardTitle>
          <CardSubtitle>Premier: {Year}</CardSubtitle>
          <CardText>Imdb Rating: {imdbRating}</CardText>
          <Button onClick={showMoreClick}>Show More</Button>
        </CardBody>
      </Card>
      <MoreInfo isOpen={modal} />
    </Col>
  );
};

export default MovieCard;
