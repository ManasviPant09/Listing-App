import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity } from '../redux/cartSlice';
import Header from '../components/Header';

const Cart = () => {
  const[quantity,setQuantity] = useState(1);
  const dispatch = useDispatch();
  const name = useSelector((state) => state.cart.selectedPizza);
  const image = useSelector((state) => state.cart.image);
  const size = useSelector((state) => state.cart.size);
  const toppings = useSelector((state) => state.cart.toppings);
  
  const handleQuantityChange = (type) =>{
    if(type === "dec"){
      quantity > 1 && setQuantity(quantity-1);
    }
    else{
      setQuantity(quantity+1);
    }
  };

  const handleClick = ()=>{
    dispatch(updateQuantity(quantity));
  }
  return (
    <>
    <Header />
    <div style={{ display: 'flex', alignItems: 'center', padding: '20px', height: '100vh', width: '100%', backgroundColor: '#E0E0E0' }}>
      <img src={image} alt={name} style={{ width: '50%', marginLeft: '45px', marginRight: '20px',  marginTop: "-100px" }} />
      <div style={{ backgroundColor: '#D3D3D3', marginTop: "-100px", width: '40%', height: "68%", padding: "50px" }}>
        <h4 style={{ margin: 0, marginBottom: "20px" }}><center>{name}</center></h4>
        <div style={{display: "flex"}}>
          <p>Size - </p>
          <p style={{marginLeft: "65px"}}>{size}</p>
        </div>
        <div style={{display: "flex"}}>
          <p style={{width: "150px"}}>Toppings -</p>
          {Array.isArray(toppings) ? (
          <p style={{marginLeft: "10px"}}>{toppings.join(", ")}</p>) : (
          <p style={{marginLeft: "-45px"}}>{toppings}</p>)}
        </div>
        <div style={{display: "flex"}}>
          <p>Quantity - </p>
          <p style={{marginLeft: "30px"}}>{quantity}</p>
        </div>
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
          <Button variant="dark" size="sm" onClick={handleClick}>Add</Button>
          <button
            style={{
              padding: '5px 10px',
              backgroundColor: '#4caf50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              marginLeft: '10px',
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