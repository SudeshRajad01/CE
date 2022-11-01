import React,{ createContext, useReducer } from 'react';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Cart from "./components/Cart";
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
    <Route exact path='/' element = {<Home/>}/>
    <Route path='/Signup' element = {<Signup/>}/>
    <Route path='/Login' element = {<Login/>}/>
    <Route path='/Cart' element = {<Cart/>}/>

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