import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { Col, Row } from 'reactstrap';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import MovieContainer from './components/MovieContainer/MovieContainer';

function App() {
  return (
    <div className='App'>
      <Layout fluid>
        <Row>
          <Col>
            <Header size='h1' title='WELCOME TO THE THUNDERDOME!' />
          </Col>
        </Row>
        <Row>
          <Col xs={16} md={2}>
            <Dashboard />
          </Col>
          <Col xs={16} md={10}>
            <MovieContainer />
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default App;
