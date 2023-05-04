import React, { useState } from 'react'
import { Card, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Veg from "../assets/Veg.png";
import NonVeg from "../assets/Non-Veg.png";
import Modal from './Modal';

const Pizza = ({pizzaItem}) => {

  const[showModal,setShowModal] = useState(false);
  const handleShowModal = () =>{
    setShowModal(true);
  }

  return (
    <Col >
        {pizzaItem && (
        <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "20px" }}>
        <Card style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",transition: "box-shadow .3s", width: "100%", height: "600px"}}>
            <Card.Img variant="top" src={pizzaItem.img_url} style={{ height: "220px" }} />
            <Card.Body style={{ maxHeight: "400px", overflow: "hidden" }}>
                <Card.Title style={{ fontWeight: "bold", color: "black", marginTop:"5px"}}>{pizzaItem.name}</Card.Title>
                <Card.Text style={{ fontStyle: "italic"}}>{pizzaItem.description}</Card.Text>
                <Card.Text style={{color: "black"}}>Rating: {pizzaItem.rating}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16" style={{marginLeft: "5px", marginBottom: "4px"}}>
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                </Card.Text>
                <Card.Text style={{color: "black"}}>Price: ₹{pizzaItem.price}</Card.Text>
                <Card.Text>{pizzaItem.isVeg ? (
                <img src={Veg} alt="Veg" />) : (
                <img src={NonVeg} alt="Non-Veg" />)}</Card.Text>
                <Card.Text><Button variant="dark" size="sm" onClick={handleShowModal}>Add</Button></Card.Text>
            </Card.Body>
        </Card>
        </div>
        )}
        {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          pizzaItem={pizzaItem}
        />
      )}
    </Col>
  );
}

export default Pizza;