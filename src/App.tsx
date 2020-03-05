import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { Col, Row } from 'reactstrap';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className='App'>
      <Layout fluid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <Dashboard />
          </Col>
          <Col md={10}>SHOW MOVIES HERE!</Col>
        </Row>
      </Layout>
    </div>
  );
}

export default App;
