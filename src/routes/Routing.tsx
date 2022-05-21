import React, { useRef, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import HomeView from "views/HomeView/HomeView";
import AddProductView from "views/AddProductView/AddProductView"; 

const Routing = () => {

  return (
      <Routes>
        <Route path='/addproduct/' element={<AddProductView />} />  
        <Route path='/' element={<HomeView />} />      
      </Routes>
  ); 
}

export default Routing;
