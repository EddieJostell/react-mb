import React, { ReactNode, KeyboardEvent, FormEvent } from 'react';
import './Dashboard.css';
import { Row, Button, Col, Input } from 'reactstrap';
import Header from '../Header/Header';

export interface IDashboardProps {
  titleSearch: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export const Dashboard = (props: IDashboardProps): JSX.Element => {
  const { titleSearch } = props;
  return (
    <Col className='dashboard'>
      <Row>
        <Col className='mb-5'>
          <Header title='List Movies By:' size='h2' />
        </Col>
      </Row>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          {/*  <Row>
            <Button outline color='danger' className='mb-4'>
              Add to DB
            </Button>
          </Row> */}
          <Row className='mb-4'>
            <Header size='h6' title='Search by title' />
            <Input placeholder='enter movie name' onKeyDown={titleSearch} />
          </Row>
          {/*   <Row>
            <Button outline color='danger' className='mb-4'>
              Top Rated
            </Button>
          </Row>
          <Row>
            <Button outline color='danger' className='mb-4'>
              Popular
            </Button>
          </Row>
          <Row>
            <Button outline color='danger' className='mb-4'>
              Sort By Genre
            </Button>
          </Row>
          <Row>
            <Button outline color='danger' className='mb-4'>
              Sort By Year
            </Button>
          </Row> */}
        </Col>
      </Row>
    </Col>
  );
};

export default Dashboard;
