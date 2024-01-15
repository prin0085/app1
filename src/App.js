import React from 'react';
import './style.css';
import { Header, Content, Footer } from './func-component';
import Button from './class-component';

function App() {
  return (
    <>
      <Header />
      <p className='text-center'><Button /></p>
      <Content />
      <Footer />
    </>
  )
}

export default App;
