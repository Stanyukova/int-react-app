import React, { useState } from "react";

import Header from "./components/Header";
import Home from './pages/Home'
import Footer from "./components/Footer";



import "./scss/app.scss";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Article from "./pages/Article";
import { useSelector, useDispatch } from 'react-redux'
import Order from "./components/Order";

function App() {
const [searchValue, setSearchValue] = React.useState('')

 
  return (
    <div className="App">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
   <Routes>
    <Route path="/" element={<Home searchValue={searchValue} setSearchValue={setSearchValue}/>} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/product/:id" element={<Article />} />
    <Route path="/order" element={<Order />} />
   </Routes>
      <Footer />
     
    </div>
  );
}

export default App;
