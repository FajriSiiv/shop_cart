import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import { Product } from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/list">
            <ProductList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
