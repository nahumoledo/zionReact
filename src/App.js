import './App.css';
import React from 'react';
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'




function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/category/:categoryId' element={<NavBar />} />
        <Route exact path='/item:id' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;