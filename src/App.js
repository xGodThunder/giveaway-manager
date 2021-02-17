import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import Authenticate from './components/login/Authenticate';
import Navigation from './components/home/Nav';
import Giveaway from './components/giveaways/Giveaway';
export default function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
        <Navigation/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Authenticate}/>
          <Route path="/giveaway" exact component={Authenticate}/>
          <Route path="/giveaway/new" exact component={Giveaway}/>
          <Route path="/giveaway/:id" exact component={Giveaway}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}


