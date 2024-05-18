import React from 'react';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header></Header>
      <main className='py-3'>
        <Container>
          <h1>Welcome to Ecommerce</h1>
          <Outlet></Outlet>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
