

import React from "react";
import Header from "./components/header";
import Categories from "./components/catagory";
import Carouesl from "./components/carouesl";
import Products from "./components/products";
import { Container } from "@mui/material";

const App = () => {
  return (
    <div>
      {/* <h1>Hello World Made by Saptarshi Roy</h1> */}
      <Container>
        <Header/>
        <Categories/>
        <Carouesl/>
        <Products/>
      </Container>
    </div>
  )
}

export default App;