import React from 'react';
import './style.css';
import { userContext } from './context/context'
import Content from './context/context-content'

function App() {
  return (
    <userContext.Provider value={'Tom Jerry'}>
      <Content />
    </userContext.Provider>
  )
}

export default App;
