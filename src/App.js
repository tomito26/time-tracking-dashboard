import Header from './components/Header';
import { useState } from 'react';
import Data from './data.json';
import Durations from './components/Durations';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom'

function App() {
  const [time,setTime] = useState(Data)

 console.log(time)

  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Durations time={time} />
      </div>
      
    </div>
  );
}

export default App;
