
import './App.css';
import Home from './Home';
import Login from './Login';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Tododisplay from './components/Tododisplay';
import SpecifyNavBar from './components/specifyNavBar/SpecifyNavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <SpecifyNavBar>
          <Navbar />
        </SpecifyNavBar>
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/loginpage'><Login /></Route>
          <Route path='/todoapp'><Tododisplay /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
