import { useState } from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './Componants/NavBar';
import Footer from './Componants/Footer';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Shop from './Componants/Shop';
import Checkout from './Pages/Checkout';
import Order from './Pages/Order';
import Sign from './Pages/Sign';
import Login from './Componants/Login';
import Search from './Pages/Search';
import ProductDetail from './Pages/ProductDetail';

function App() {
  const [order, setOrder] = useState(null);
  const location = useLocation();

  const hideNavbarPages = ['/login', '/sign-up']; // List of pages where navbar should be hidden

  return (
    <div className='py-5 h-screen w-full'>
      {/* Conditionally render NavBar based on current route */}
      {!hideNavbarPages.includes(location.pathname) && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout order={order} setOrder={setOrder} />} />
        <Route path="/setorderconfirm" element={<Order order={order} setOrder={setOrder} />} />
        <Route path="/sign-up" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
      </Routes>

  
    </div>
  );
}

export default App;
