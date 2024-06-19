import React, { useState } from 'react';
import './App.css';
import Products, { a, b } from './components/Products/Products';

function App() {
  const [card, setCard] = useState({
    quantity: 0
  });

  const increaseQuantity = () => {
    setCard(prevCard => ({
      ...prevCard,
      quantity: prevCard.quantity + 1
    }));
  };

  const decreaseQuantity = () => {
    setCard(prevCard => ({
      ...prevCard,
      quantity: Math.max(prevCard.quantity - 1, 0) // Prevent negative quantity
    }));
  };

  console.log(a, b);
  
  return (
    <div className="App">
      <Products 
        card={card} 
        increaseQuantity={increaseQuantity} 
        decreaseQuantity={decreaseQuantity} 
      />
    </div>
  );
}

export default App;
