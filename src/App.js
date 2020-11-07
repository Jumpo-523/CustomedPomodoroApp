import React from 'react'
import senko from './senko.svg';
import './App.css';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import { Home, Addbutton} from './components/Home.js';
import { Pomodoro } from './components/Pomodoro.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={senko} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="/home"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          Go to my profile
        </a>
      </header>
    </div>
  );
}
{/* <Link to="/About">About</Link> */}


// Home
class Navbar extends React.Component {
  render(){
    return(
      <Router>
      <div>
        <Route exact path='/' component={App}/>
        <Route exact path='/home' render={ () => <Home/> }/>
        <Route exact path='/Addbutton' render={ () => <Addbutton/> }/>
        <Route exact path='/Pomodoro' render={ () => <Pomodoro/> }/>
      </div>
      </Router>
    )
  }
}

export default Navbar;

