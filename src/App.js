import React from 'react';
import './style.css';
import { userContext } from './context/context'
import Content from './context/context-content'
import Header from './context/context-header'

function App() {
  let [user, setUser] = React.useState();
  return (
    <userContext.Provider value={[user, setUser]}>
      <Header />
      <Content />
    </userContext.Provider>
  )
}

export default App;
