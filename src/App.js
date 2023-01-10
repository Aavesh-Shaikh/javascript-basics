// Library imports
import React, { Component, useState } from 'react';

// Project setup imports
import logo from './logo.svg';
import './App.css';
import Animation from './components/Animation';
import Logic from './components/Math/Logic';


// Component logic 
function App() {
  const [sumResult, setSumResult] = useState();
  const [subResult, setSubResult] = useState();
  const [multResult, setMultResult] = useState();
  const [diviResult, setDiviResult] = useState();


  return (
    <React.Fragment>
      <Animation
        sumResult={sumResult}
        subResult={subResult}
        multResult={multResult}
        diviResult={diviResult} />

      <Logic 
        setSumResult={setSumResult}
        setSubResult={setSubResult}
        setMultResult={setMultResult}
        setDiviResult={setDiviResult} />
    </React.Fragment>
  )

}

export default App;
