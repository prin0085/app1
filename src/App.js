import React from 'react';
import './style.css';
import { Header, Content, Footer } from './func-component'
import Calendar from './class-component'

function App() {
  return (
    <>
      <Header />
      <p className='text-center'><Calendar /></p>
      <Content />
      <Footer />
    </>
  )
}

export default App;
