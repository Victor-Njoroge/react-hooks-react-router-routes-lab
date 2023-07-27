import React from "react";
import { BrowserRouter, Switch ,Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/directors' element={<Actors/>}/>
        <Route exact path='/actors' element={<Directors/>}/>
        <Route exact path='/movies' element={<Movies/>}/>
      </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
