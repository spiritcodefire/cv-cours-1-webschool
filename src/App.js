import React from "react"
import './App.css';
import Home from "./pages/Home/Home";
import ExempleState from "./components/Exemple/ExempleState";
import Parent from "./components/Exemple/Parents";
import Count from "./components/Exemple/Count/Count";
import Toogle from "./components/Exemple/Toogle"
import ListExemple from "./components/Exemple/ListExemple";
import ExempleObject from "./components/Exemple/ExempleObject";
function App() {

  return (
    <>
      <Home />
      {/* <Toogle />
      <ExempleObject /> */}
      {/* <Count />   aplication count en reserve */} 
      {/* <ExempleState />
      <Parent /> */}
    </>
  );
}

export default App;