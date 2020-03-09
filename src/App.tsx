import React, { useEffect, useState } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { Col, Row } from 'reactstrap';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import MovieContainer from './components/MovieContainer/MovieContainer';
import { MovieList } from './movies';

function App() {
  const [movieState, setMovieState] = useState(MovieList);
  const fetchFromApi = () => {
    const apiKey = '1f45a076';
    let movies = `http://www.omdbapi.com/?t=taxi&plot=full&apikey=${apiKey}`;

    fetch(movies)
      .then(response => {
        return response.json();
      })
      .then(data => {
        movieState.push(data);
        setMovieState([...movieState]);
      });
  };

  return (
    <div className='App'>
      <Layout fluid>
        <Row>
          <Col>
            <Header size='h1' title='AWESOME MOVIEDATABASE!' />
          </Col>
        </Row>
        <Row>
          <Col xs={16} md={2}>
            <Dashboard handleClick={fetchFromApi} />
          </Col>
          <Col xs={16} md={10}>
            <MovieContainer movieList={movieState} />
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default App;
