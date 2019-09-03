import React from 'react';
import Baker from '../image/baker.svg';
import Title from "../HomePage/Title";
import "../HomePage/HomePage.css";

class Navbar extends React.Component{
  render(){
    return(
      <>
        <img src={Baker} className="baker" width='100px' height='100px'/>
      </>
    )
  }
}

export default Navbar;