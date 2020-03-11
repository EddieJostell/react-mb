import React from 'react';
import { Modal, Col, Row, ModalBody, ModalHeader } from 'reactstrap';
import './MoreInfo.css';
import Header from '../../Header/Header';
import { IMovieCard } from '../../../movies';

export interface IMoreInfoProps {
  localMovieInfo: IMovieCard;
}

interface IMoreInfoState extends IMoreInfoProps {
  isOpen?: boolean;
  handleClick?: () => void;
}

export const MoreInfo = (props: IMoreInfoState) => {
  const { isOpen, handleClick, localMovieInfo } = props;

  const {
    Title,
    Rated,
    Released,
    Genre,
    Director,
    Actors,
    Plot,
    Production,
    Ratings,
    Poster
  } = localMovieInfo;

  let ratings = Ratings.map((rate: any, key: any) => (
    <Col key={key}>
      <p>
        <strong>
          {rate.Source} {rate.Value}
        </strong>
      </p>
    </Col>
  ));

  return (
    <Modal isOpen={isOpen} size='lg' className='MoreInfo'>
      <ModalBody className='MoreInfo-body'>
        <Row>
          <Col md={{ size: 1, offset: 11 }}>
            <button
              type='button'
              className='close'
              aria-label='Close'
              onClick={handleClick}
            >
              <span aria-hidden='true'>×</span>
            </button>
            {/* <Button>Close</Button> */}
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <img
              src={
                Poster === 'N/A'
                  ? 'https://placehold.it/198x264&text=Image+Not+Found'
                  : Poster
              }
              alt={Title}
            />
          </Col>
          <Col xs={12} md={8}>
            <Row>
              <Col md={12}>
                <Row>
                  <Col md={4}>
                    <Header size='h5' title={Title} />
                  </Col>
                  <Col md={4}>
                    <Header size='h5' title={`Rated: ${Rated}`} />
                  </Col>
                  <Col md={4}>
                    <Header size='h5' title={`Release date: ${Released}`} />
                  </Col>
                </Row>
              </Col>
              <Col md={12}>
                <Header size='h6' title='Genre:' />{' '}
                <p>
                  <strong>{Genre}</strong>
                </p>
              </Col>
              <Col md={12}>
                <Header size='h6' title='Director:' />{' '}
                <p>
                  <strong>{Director}</strong>
                </p>
              </Col>
              <Col md={12}>
                <Header size='h6' title='Actors:' />{' '}
                <p>
                  <strong>{Actors}</strong>
                </p>
              </Col>
              <Col md={12}>
                <Header size='h5' title='Plot' />
                <p>
                  <strong>{Plot}</strong>
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Row>
                  <Col>
                    <Header size='h6' title='Production:' />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>
                      <strong>{Production}</strong>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <Header size='h6' title='Rating' />
                  </Col>
                </Row>
                <Row>{ratings}</Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default MoreInfo;
