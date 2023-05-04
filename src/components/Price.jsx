import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

const Price = ({handleSortPrice}) => {
  const [selectedOption, setSelectedOption] = useState("Price");
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    handleSortPrice(option);
  }
  
  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{width: "150px"}}>{selectedOption}</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleOptionSelect("High to Low")}>High to Low</Dropdown.Item>
        <Dropdown.Item onClick={() => handleOptionSelect("Low to High")}>Low to High</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Price;