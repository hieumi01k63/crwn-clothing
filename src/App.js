import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import { HomePage } from "./pages/homepage/homepage.component";

const HatPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hat Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/shop/hats" component={HatPage}></Route>
    </div>
  );
}

export default App;
