import React,{useEffect,useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Price from './Price';
import Rating from './Rating';
import axios from "axios";
import Pizza from './Pizza';
import Veg from "../assets/Veg.png";
import NonVeg from "../assets/Non-Veg.png";

const Menu = () => {
  const [pizza, setPizza] = useState([]);
  const [sortPrice,setSortPrice] = useState("");
  const [sortRating,setSortRating] = useState("");
  const [vegPizzas, setVegPizzas] = useState([]);
  const [nonVegPizzas, setNonVegPizzas] = useState([]);
  const [type,setType] = useState("");

  const fetchData = async () =>{
    await axios
    .get("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68"
    )
    .then((res)=>{
      const data = res.data;
      setPizza(data);
      setVegPizzas(data.filter(pizza => pizza.isVeg === true));
      setNonVegPizzas(data.filter(pizza => pizza.isVeg === false));
    });
  }
  useEffect(()=>{
    fetchData();
  },[]);

  const handleType = (type) => {
    setType(type);
    if (type === "veg") {
      setPizza(vegPizzas);
    } else if (type === "nonveg") {
      setPizza(nonVegPizzas);
    }
  }; 

  useEffect(()=>{
    if (sortPrice === "lowToHigh") {
      setPizza((prevPizza) =>
        prevPizza.slice().sort((a, b) => a.price - b.price)
      );
    } else if (sortPrice === "highToLow") {
      setPizza((prevPizza) =>
        prevPizza.slice().sort((a, b) => b.price - a.price)
      );
    }
  },[sortPrice]);

  const handleSortPrice = (sortOption) => {
    console.log(sortOption);
    setSortPrice(sortOption);
  };

  useEffect(()=>{
    if (sortRating === "lowToHigh") {
      setPizza((prevPizza) =>
        prevPizza.slice().sort((a, b) => a.rating - b.rating)
      );
    } else if (sortRating === "highToLow") {
      setPizza((prevPizza) =>
        prevPizza.slice().sort((a, b) => b.rating - a.rating)
      );
    }
  },[sortRating]);

  const handleSortRating = (sortOption) => {
    console.log(sortOption);
    setSortRating(sortOption);
  };

  return (
    <Container>
      <Row style={{backgroundColor: "#E0E0E0"}}>
        <Row xs={2} md={2} lg={6} style={{marginTop: "40px", marginLeft: "0px"}}>
          <Row xs={4} md={2} lg={6}>
            <Col><img src={Veg} alt="Veg" /></Col>
            <Col><Button variant="success" style={{width: "120px", marginTop: "7px", marginLeft: "20px"}} 
            onClick={() => handleType("veg")}>VEG</Button></Col>
          </Row>
          <Row xs={4} md={2} lg={6}>
            <Col style={{marginLeft: "40px"}}><img src={NonVeg} alt="NonVeg" /></Col>
            <Col><Button variant="danger" style={{width: "120px", marginTop: "7px", marginLeft: "20px"}} 
            onClick={() => handleType("nonveg")}>NON-VEG</Button></Col>
          </Row>          
        </Row>
        <Row xs={3} md={2} lg={6} style={{marginTop: "40px", marginLeft: "0px", display:"flex",justifyContent: "space-between"}}>
          <Col><Price handleSortPrice={handleSortPrice} /></Col>
          <Col><Rating handleSortRating={handleSortRating} /></Col>
        </Row>
        <Row xs={1} md={3} lg={4} style={{marginTop: "40px",display:"flex", flexDirection: "row", alignItems:"center",marginLeft: "2px"}}>
        {type === "veg"
          ? vegPizzas.map((pizzaItem, index) => (
              <Col key={index}>
                <Pizza pizzaItem={pizzaItem} />
              </Col>
            ))
          : type === "nonveg"
          ? nonVegPizzas.map((pizzaItem, index) => (
              <Col key={index}>
                <Pizza pizzaItem={pizzaItem} />
              </Col>
            ))
          : pizza.map((pizzaItem, index) => (
              <Col key={index}>
                <Pizza pizzaItem={pizzaItem} />
              </Col>
            ))}
        </Row>
      </Row>
    </Container>
  )
}
export default Menu;
