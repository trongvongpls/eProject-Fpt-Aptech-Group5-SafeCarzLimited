import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Page/Home';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import About from './Page/About';
import Car from './Page/Car';
import Motorbike from './Page/Motorbike';
import Car_claim from './Page/Car_claim';
import Motorbike_claim from './Page/Motorbike_claim';
import Contact from './Page/Contact';
import Cart from './Page/Cart';
import { useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState([]);
  const handleAdd = (product) => {
    const ProductExits = cartItems.find((item) => item.id === product.id);
    if (ProductExits) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExits, quantity: ProductExits.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    alert("Add cart success!");
  };

  
  const deleteCart = (GFGCourse) => {
    const updatedCart = cartItems
      .filter(item => item.id !==GFGCourse.id);
    setCartItems(updatedCart);
    alert("Delete cart success!");
  };

  return (
    <div>
      <BrowserRouter>
        <Header  number={cartItems.length}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/car' element={<Car handleAdd={handleAdd} cartItems={cartItems}  />} />
          <Route path='/bike' element={<Motorbike handleAdd={handleAdd} cartItems={cartItems}  />} />
          <Route path='/car_claim' element={<Car_claim />} />
          <Route path='/bike_claim' element={<Motorbike_claim />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart cartItems={cartItems} deleteCart={deleteCart} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
