import React from 'react';
import buffet from '../image/buffet.jpg';
import calendar from "../image/calendar.jpg";
import cook from "../image/cook.jpg";
import Title from "../HomePage/Title";
import {Link} from "react-router-dom";
import Button from "./Button";

import './HomePage.css';

class HomePage extends React.Component{
  render(){
    return(
      <>
      <Button />
        <div className="main">
          <div className="cards">
            <div className="home">
              <img src={buffet} width="288px" />
              <div className="description">
                <p>Step 1: <span>Choose the recipe</span></p>
              </div> 
            </div>
            <div className="home">
              <img src={calendar} width="288px" />
              <div className="description">
                <p>Step 2 : <span>Add it Calendar</span></p>
              </div> 
            </div>
            <div className="home">
              <img src={cook} width="288px" />
              <div className="description">
                <p>Finally : <span>Cook</span> </p>
              </div> 
            </div>
          </div>
       </div>
       <div>
         <Title />
       </div>
      </>
    )
  }
}

export default HomePage;