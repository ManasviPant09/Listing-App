import React,{useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const Rating = ({handleSortRating}) => {
  const handleOptionSelect = (option) => {
    handleSortRating(option);
  }
  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{width: "150px"}}>Rating</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleOptionSelect("highToLow")}>High to Low </Dropdown.Item>
        <Dropdown.Item onClick={() => handleOptionSelect("lowToHigh")}>Low to High</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Rating
