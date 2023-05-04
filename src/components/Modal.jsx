import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Form } from 'react-bootstrap';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { setSelectedPizza, setPizzaImage, setPizzaSize,setPizzaToppings } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const Modal = ({showModal,setShowModal,pizzaItem}) => {

  const [size, setSize] = useState("Size");
  const [selectedTopping, setSelectedTopping] = useState('');
  const [topping,setTopping] = useState([]);
  const [toppings,setToppings] = useState([]);

  const dispatch = useDispatch();

  const handleSizeSelect = (selectedSize) => {
    setSize(selectedSize);
    dispatch(setSelectedPizza(pizzaItem.name));
    dispatch(setPizzaImage(pizzaItem.img_url));
    dispatch(setPizzaSize(selectedSize));
  };

  const handleToppingSelect = (selectedTopping) => {
    setTopping([selectedTopping]);
    setSelectedTopping(selectedTopping);
    dispatch(setPizzaToppings(selectedTopping));
  };

  const handleToppingsSelect = (selectedToppings) => {
    const newToppings = [...toppings];
    const toppingIndex = newToppings.indexOf(selectedToppings);
    if (toppingIndex >= 0) {
      newToppings.splice(toppingIndex, 1);
    } 
    else {
    newToppings.push(selectedToppings);}
    setToppings(newToppings);
    dispatch(setPizzaToppings(newToppings));
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <MDBModal show={showModal}>
      <MDBModalDialog size="lg">
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle style={{fontWeight: "bold", color: "black"}}>{pizzaItem.name}</MDBModalTitle>
            <MDBBtn className="btn-close" color="none" onClick={handleCloseModal}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody style={{height: "100%", marginBottom: "100px"}}>
            <p style={{color: "black",fontStyle: "italic"}}>{pizzaItem.description}!</p>
            <div style={{display: "flex",direction: "column"}}>
              <h6 style={{marginRight: "200px"}}>Choose a size - </h6>
              <Dropdown style={{marginBottom: "10px"}}>
               <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{minWidth: "115px"}}>{size}</Dropdown.Toggle>
               <Dropdown.Menu style={{ maxHeight: "200px", overflowY: "auto" }}>
               {pizzaItem.size[0].items.map((sizeItem, index) => (
                <Dropdown.Item key={index} onClick={() => handleSizeSelect(sizeItem.size)}>{sizeItem.size}</Dropdown.Item>
               ))}
               </Dropdown.Menu>
              </Dropdown>
            </div>
            {pizzaItem.toppings[0].isRadio ? (
              <Form>
              <h6>Choose your preference of toppings -</h6>
              {pizzaItem.toppings[0].items.map((topping, index) => (
                <Form.Check
                  key={index}
                  type="checkbox"
                  id={`topping-${index}`}
                  label={topping.name}
                  onChange={() => handleToppingsSelect(topping.name)}
                />
              ))}
            </Form>) : (
            <Form>
              <h6>Choose your preference of toppings -</h6>
              {pizzaItem.toppings[0].items.map((topping, index) => (
                <Form.Check
                key={index}
                type="radio"
                id={`topping-${index}`}
                label={topping.name}
                disabled={topping.name !== selectedTopping && selectedTopping !== ""}
                onChange={() => handleToppingSelect(topping.name)}
                checked={topping.name === selectedTopping}
                />
              ))}
            </Form>)}
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="dark" onClick={handleCloseModal}>Cancel</MDBBtn>
            <Link to = "/cart"><MDBBtn color="dark">Go to Cart</MDBBtn></Link>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
}

export default Modal;