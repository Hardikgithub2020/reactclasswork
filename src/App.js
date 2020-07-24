import React from 'react';
import logo from './759px-Burger_King_logo.svg.png';
import './App.css';
import Restaurant from './Component/Restaurant';
import Topping from './Component/Toppings';
import Hobbies from './Component/Hobbies';
import ClassTeST from './Component/ClassTest';
import StopWatch from './Component/DigitalClock';
import ClickButton from './Component/ClickButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Restaurant />
        <hr />
        <Topping />
        <hr />
        <h2>My favorite hobbies are...</h2>
        <div className="hobbySet">
          <Hobbies name="Running" url="https://www.meme-arsenal.com/memes/0f41d42d6c23ce03ae335e89695910ab.jpg" desc="Running around, trying not to flail" />
          <Hobbies name="Programming" url="https://displate.com/displates/1126351/zoom/2019-12-26/95671a3f8bbf992195682ed38aa428d8_4df68965580aa315b00b77c7c3d64c07.jpg" desc="I would like to not have a $3000 paper weight" />
          <Hobbies name="Reading" url="https://lh3.googleusercontent.com/proxy/3C7JaEvm8N0jZ81CACL0Z_rOgk5Bc9-tZJFPEbCF7Ra95ORYPuSRYCvTeWDjp0DKXhthwAWkNMUrP29Wcg6SsantMYwYPmDV7z0hm3K3hs5EKINtmktzXurRFQ6qXBADZXgwlgJCFqJLolBuVPL63uZ5k0BHl1QY25_T0L7q" desc="So I can call myself cultured in social settings" />
        </div>
        <hr />
        <ClassTeST />
        <hr />
        <StopWatch />
        <hr />
        <ClickButton />
      </header>
    </div>
  );
}

export default App;