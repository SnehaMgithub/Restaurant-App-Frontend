import React, { useContext, useState } from 'react';
import RestaurantList from './components/RestaurantList.jsx';
import DishesMenu from './components/DishesMenu.jsx';
import Cart from './components/Cart.jsx';
import { RestaurantContext } from './Contexts/RestaurantContext.jsx';
import './App.css';  // Import the CSS file

const App = () => {
  // Access selectedRestaurant from Context API
  const { selectedRestaurant } = useContext(RestaurantContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div className="container">
      <nav>
      <h1 className="header">GFG Restaurant App</h1>

      {/* Cart Toggle Button */}
      <button onClick={() => setIsCartOpen(true)} className="cart-button">
      🛒 
      </button>
      </nav>
      {/* Toggle Cart Modal */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <RestaurantList />

      {/* Conditionally show dishes if a restaurant is selected */}
      {selectedRestaurant && <DishesMenu />}
    </div>
  );
};

export default App;
