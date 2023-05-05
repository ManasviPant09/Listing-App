import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

const Price = ({handleSortPrice}) => {
  const handleOptionSelect = (option) => {
    handleSortPrice(option);
  }
  
  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{width: "150px"}}>Price</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleOptionSelect("highToLow")}>High to Low</Dropdown.Item>
        <Dropdown.Item onClick={() => handleOptionSelect("lowToHigh")}>Low to High</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Price;