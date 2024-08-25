import "./styles/Home.css";
import React, { useState } from 'react';
import Navbar from "./components/navbar";
import IntroTitle from "./components/intro_title";
import TextAnimation from "./components/text_stagger_reveal";

function Home() {
  const [isSelected, setIsSelected] = useState(false);

  const handleMenuClick = () => {
    setIsSelected(!isSelected); 
  };

  return (
    <>
      <div className="Home-Background">
        <div className="title-position">
          <TextAnimation
            className="first-child"
            children={
              <div>
                <p>ROSAN</p>
              </div>
            }
          />
          <TextAnimation
            className="last-child"
            children={
              <div>
                <p>Cloud</p>
                <br></br>
                <p>Enthusiast</p>
              </div>
            }
          />
        </div>

        <div className="nav-menu" onClick={handleMenuClick}>
          {!isSelected &&
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 7H21" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M9.48828 12H20.9983" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M3 12H5.99" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M3 17H21" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          }
          {
            isSelected &&
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 7H21" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M9.48828 12H20.9983" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M3 12H5.99" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M3 17H21" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          }
        </div>

        <Navbar className={`nav-position ${isSelected ? 'on' : ''}`}/>

        <div className="intro-title">
          <IntroTitle />
        </div>
      </div>
    </>
  );
}

export default Home;
