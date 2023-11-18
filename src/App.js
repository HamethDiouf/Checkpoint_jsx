import './App.css';
import React from 'react';
import product from './Product';
import Name from './Name';
import Image from './Image';
import Price from './Price';
import Description from './Description';
import { Card } from "react-bootstrap";

function App() {
  const prenom = " ";
  const content = {
img: <img src={'./coeur-2.jpg'}alt='image-message' style={{width:"4rem", marginTop:"-rem"}}/>
  }
  return (
    <div className="App" style={{width:"100%", marginTop:"5rem", color:"darkgreen"}}>

    <Card style={{ width: "25%", marginBottom:"1.5rem" , fontFamily:"sans-serif"}} className='justify-content-center mx-auto'>
    {prenom && <img src={product.imageUrl} alt=" image Samsung TV LED" />}
    
        <Card.Body style={{ marginTop:"-7rem" }}>
        <Image imageUrl={product.imageUrl}/>
          <Name name={product.name.toUpperCase()}/>
          <Description description={product.description}/>
          <Price price={product.price}/>
        </Card.Body>
      </Card>
      <p>Hello, there {prenom ? prenom : ""}!</p>
      <p>{content.img}</p>
    </div>
  );
}

export default App;
