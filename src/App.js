import './App.css';
import React from 'react';
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/cartContext';
import Cart from './components/cart/cart';
import Footer from './components/footer/footer';



function App() {
  return (
    <CartProvider>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer /> } />
          <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='cart' element={<Cart />}/>
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;