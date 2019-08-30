import React from 'react';
import Baker from '../image/baker.svg';

class Navbar extends React.Component{
  render(){
    return(
      <>
        <h1>Plan it up!</h1>
        <img src={Baker}  width='100px' height='100px'/>
      </>
    )
  }
}

export default Navbar;