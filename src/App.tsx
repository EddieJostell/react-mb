import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { Button } from 'reactstrap';

function App() {
  const handleClick = () => {
    alert('Hello');
  };

  return (
    <div className='App'>
      <Layout>
        HEJ
        <Button onClick={handleClick} color='primary'>
          Primary
        </Button>
      </Layout>
    </div>
  );
}

export default App;
