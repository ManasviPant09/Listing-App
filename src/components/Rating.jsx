import React,{useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const Rating = ({handleSortRating}) => {
  const [selectedOption, setSelectedOption] = useState("Rating");
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    handleSortRating(option);
  }
  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{width: "150px"}}>{selectedOption}</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleOptionSelect("High To Low")}>High to Low </Dropdown.Item>
        <Dropdown.Item onClick={() => handleOptionSelect("Low To High")}>Low to High</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Rating
