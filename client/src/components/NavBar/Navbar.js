import React from 'react';
import Baker from '../image/baker.svg';
import "../HomePage/HomePage.css";

class Navbar extends React.Component{
  render(){
    return(
      <>
        <div className="navbar">
        <h1 className="title">Plan it Up!</h1>
          <img src={Baker} className="baker" width='100px' height='100px'/>
        </div>
        
      </>
    )
  }
}

export default Navbar;