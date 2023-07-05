


import './App.css';
import Home from './Home';
import Login from './Login';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Tododisplay from './components/Tododisplay';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          {/* <Route
            render={({ location }) => {
              if (location.pathname !== "/") return <NavBar />;
            }}
          /> */}
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/loginpage'>
              <Login />
            </Route>
            <Route path='/todoapp'>
              <Tododisplay />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
