import React from "react";
import  {BrowserRouter, NavLink, Route, Switch} from "react-router-dom"
import Home from "./pages/Home"
import BtcPrice from "./pages/BtcPrice"
import EthPrice from "./pages/EthPrice"
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <div className="header">
          <NavLink exact activeClassName="active" to="/">Home</NavLink>
          <NavLink activeClassName="active" to="/compare-btc">Compare Bitcoin Price</NavLink>
          <NavLink activeClassName="active" to="/compare-eth">Compare Ethereum Price</NavLink>
        </div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/compare-btc" component={BtcPrice}/>
            <Route exact path="/compare-eth" component={EthPrice}/>
          </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
