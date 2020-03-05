import React, { Component } from 'react';
import './Dashboard.css';
import { Row, Button, Col, ButtonGroup } from 'reactstrap';
import Header from '../Header/Header';

export const Dashboard = () => {
  return (
    <Col className='dashboard'>
      <Row>
        <Col className='mb-5'>
          <Header title='List Movies By:' size='h2' />
        </Col>
      </Row>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <Button outline color='danger' className='mb-5'>
            Top Rated
          </Button>
          <Button outline color='danger' className='mb-5'>
            Popular
          </Button>
          <Button outline color='danger' className='mb-5'>
            All Movies
          </Button>
          <Button outline color='danger' className='mb-5'>
            Sort By Genre
          </Button>
          <Button outline color='danger' className='mb-5'>
            Sort By Year
          </Button>
        </Col>
      </Row>
    </Col>
  );
};

export default Dashboard;
