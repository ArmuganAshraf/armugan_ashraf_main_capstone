import React from 'react';
import "../HomePage/Title.css";
import {Link} from "react-router-dom";

class Title extends React.Component{
  render(){
    return (
        <>
        <h1 className="title">Plan it Up!</h1>
        <div>
          <Link to="/mealplan"><button>
            Menu
          </button></Link>
          <Link to="/calendar"><button>
            Calendar
          </button></Link>
        </div>
        </>
    )
  }
}

export default Title;