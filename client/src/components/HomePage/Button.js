import React from "react";
import {Link} from "react-router-dom";
import "../HomePage/Button.css";

class Button extends React.Component{
  render(){
    return (
      <>
        <div className="homebutton">
          <Link to="/mealplan"><button className="homebutton__button1">
            Menu
          </button></Link>
          <Link to="/calendar"><button className="homebutton__button2">
            Calendar
          </button></Link>
        </div>
      </>
    )
  }
}
export default Button;