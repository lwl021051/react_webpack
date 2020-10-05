import React from 'react';
import './App.css';
import Nav from "./views/Nav";
import About from "./views/About";
import Shop from "./views/Shop";
import ItemDetail from "./views/ItemDetail";
import {ShopProductListProvider} from './views/ShopContext';
import {BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter>
      <ShopProductListProvider>
        <div className="App">
          <Nav/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:id" component={ItemDetail} />
          </Switch>
        </div>
      </ShopProductListProvider>
    </BrowserRouter>
  );
}

const Home =()=>{
  return(
    <div>Home Page</div>
  )
}

export default App;
