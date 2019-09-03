import React from 'react';
import Baker from '../image/baker.svg';
import Title from "../HomePage/Title";

class Navbar extends React.Component{
  render(){
    return(
      <>
        <Title />
        <img src={Baker}  width='100px' height='100px'/>
      </>
    )
  }
}

export default Navbar;