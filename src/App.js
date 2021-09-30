import Header from './components/Header';
import { useState } from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import Data from './data.json';
import Durations from './components/Durations';
import Monthly from './components/Monthly'
import Weekly from './components/Weekly'
import { Fragment } from 'react/cjs/react.production.min';




function App() {
  const [time,setTime] = useState(Data)

 console.log(time)

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header/>
          <Route path='/' exact render={(props) =>(
            <Fragment>
              <Durations time={time} />
            </Fragment>
          ) } />

          <Route path='/monthly'  render={(props) =>(
            <Fragment>
              <Monthly time={time} />
            </Fragment>
          ) } />

          <Route path='/weekly'  render={(props) =>(
            <Fragment>
              <Weekly time={time} />
            </Fragment>
          ) } />
          
        </div>
      </div>
    </Router>
  );
}

export default App;
