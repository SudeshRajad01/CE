import React,{ createContext, useReducer } from 'react';
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
// import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {initialState, reducer} from "../src/reducer/UsedReducer";


export const UserContext = createContext();
function Routing() {
  return (
    <div>
      <Navbar/>
    <Routes>
    {/* <Route exact path='/' element = {<Home/>}/> */}
    <Route path='/Signup' element = {<Signup/>}/>
    <Route path='/Login' element = {<Login/>}/>
    </Routes>
     
    </div>
  );
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <UserContext.Provider value={{state, dispatch}}>
   
    <Routing/>

    
      </UserContext.Provider>
    </>
  )
}

export default App;