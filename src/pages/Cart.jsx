import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity } from '../redux/cartSlice';
import Header from '../components/Header';

const Cart = () => {
  const[quantity,setQuantity] = useState(1);
  const dispatch = useDispatch();
  const name = useSelector((state) => state.cart.selectedPizza.name);
  const image = useSelector((state) => state.cart.image);
  const size = useSelector((state) => state.cart.size);
  const toppings = useSelector((state) => state.cart.toppings);
  const updatequantity = useSelector((state) => state.cart.quantity);

  const handleQuantityChange = (type) =>{
    if(type === "dec"){
      quantity > 1 && setQuantity(quantity-1);
    }
    else{
      setQuantity(quantity+1);
    }
  };

  return (
    <>
    <Header />
    <div style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
      <img src={image} alt={name} style={{ width: '100px', marginRight: '20px' }} />
      <div>
        <h4 style={{ margin: 0 }}>{name}</h4>
        <p>Size: {size}</p>
        <p>Toppings: {toppings}</p>
        <p>Quantity: {quantity}</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            style={{
              padding: '5px 10px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              marginRight: '10px',
            }}
            onClick={() => handleQuantityChange("dec")}
            disabled={quantity <= 1}
          >
            -
          </button>
          <button
            style={{
              padding: '5px 10px',
              backgroundColor: '#4caf50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
            }}
            onClick={() => handleQuantityChange("inc")}
          >
            +
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Cart;