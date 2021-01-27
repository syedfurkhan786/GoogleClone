import React from 'react'
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Search from './components/Search'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/search" component={Search} exact/>
      </Switch>
    </Router>
  );
}

export default App;
