import React from "react";
import Products from "./Products";
import Rating from './Rating';
import { Button } from 'react-bootstrap';


function App() {
  //const isValid = true;

  return (
    <div>
      {/* <Products />
      <Button variant="danger" disable={!isValid}>Default</Button> */}
      <Rating rating='1' />
      <Rating rating='2' />
      <Rating rating='3' />
      <Rating rating='4' />
      <Rating rating='5' />
    </div>
  );
}

export default App;
