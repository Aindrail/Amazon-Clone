import logo from './logo.svg';
import Header from './Header';
import './App.css';
import Cart from './Cart';
import Home from './Home';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom"

function App() {
  return (
    <Router>
<div className="App">
      <Header/>
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;
