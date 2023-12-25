import React from 'react'
import './App.css';

function App() {
  let r = '<b>React</b>'
  let rb = <span dangerouslySetInnerHTML={{ __html: r }}></span>
  let rn = 'React Native'
  const el = (
    <div>
      Create Web & Mobile Apps <br />
      with {rb} & {rn}
    </div>
  )
  return el;
}

export default App;
