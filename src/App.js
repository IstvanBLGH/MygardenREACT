import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Orders from "./Orders";
import { useStateValue } from "./StateProvider";
import ListCard1 from "./ListCard1";
import ListCard2 from "./ListCard2";
import ListCard3 from "./ListCard3";
import Admin from "./admin";
import Navbarmenu from './Header2'


function App() {
  const [{basket}, dispatch] = useStateValue();

  

  return (
    <Router>
      <div className="app">
        <Switch>
          
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/admin">
            <Navbarmenu />
            <Admin />
          </Route>
         
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          
          <Route path="/ListCard1">
            <Header/>
            <ListCard1/>
          </Route>
          <Route path="/ListCard2">
            <Header/>
            <ListCard2/>
          </Route>
          <Route path="/ListCard3">
            <Header/>
            <ListCard3/>
          </Route>
          <Route path="/">
            <Header />
            <Home />
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
