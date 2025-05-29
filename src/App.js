
import React from 'react';
import {useState} from "react";
import Navbar from './navbar';
import Body from './body';

function App() {
  const[variable,setvariable]=useState("dark")
  const toggleTheme = () => {
  if(variable==="dark"){
    setvariable("light");
  }
  else{
    setvariable("dark");
  }
  
}
  return (
    <>
      <Navbar variable={variable} toggleTheme={toggleTheme} />
      <Body variable={variable} />
    </>
  );
}

export default App;
