import React, { useState } from "react";
import {
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Card,
  CardImg,
  Button,
  Col
} from "reactstrap";
import "./MovieCard.css";
import MoreInfo, { IMoreInfoProps } from "./MoreInfo/MoreInfo";
import { IMovieCard } from "../../movies";

export interface IMovieCardProps {
  movieInfo: IMovieCard;
}

interface IMovieCardState extends IMovieCardProps {
  isOpen?: boolean;
  toggle?: () => void;
}

export const MovieCard = (props: IMovieCardState) => {
  const { movieInfo } = props;

  const { Poster, Title, Year, imdbRating } = movieInfo;

  const [modal, setModal] = useState(false);

  const showMoreClick = () => {
    setModal(!modal);
  };

  return (
    <Col md={2} className="pb-2">
      <Card className="MovieCard">
        <CardImg className="MovieImg" src={Poster} alt={Title} />
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
        movieInfo={movieInfo}
      />
    </Col>
  );
};

export default MovieCard;
