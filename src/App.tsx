import React, { useState, KeyboardEvent, FormEvent } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { Col, Row } from 'reactstrap';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import MovieContainer from './components/MovieContainer/MovieContainer';
import { MovieList } from './movies';

function App() {
  const [localMovieState, setMovieState] = useState(MovieList);

  const fetchFromApiByTitle = (event: KeyboardEvent<HTMLInputElement>) => {
    const API_KEY = '1f45a076';

    if (event.key === 'Enter') {
      const query = event.currentTarget.value;
      console.log(event.currentTarget.value);

      let movies = `http://www.omdbapi.com/?t=${query}&plot=full&apikey=${API_KEY}`;

      fetch(movies)
        .then(response => {
          return response.json();
        })
        .catch(e => console.error(e))
        .then(data => {
          localMovieState.unshift(data);
          setMovieState([...localMovieState]);
        });
    }
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
            <Dashboard titleSearch={fetchFromApiByTitle} />
          </Col>
          <Col xs={16} md={10}>
            <MovieContainer localMovieList={localMovieState} />
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default App;

/* 
if (isNaN(width) || isNaN(height)) {
  throw "Parameter is not a number!";
}
}

try {
getRectArea(3, 'A');
}
catch(e) {
console.error(e);
// expected output: "Parameter is not a number!"
} */
