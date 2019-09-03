import React from 'react';
import "../HomePage/Title.css";
import {Link} from "react-router-dom";

class Title extends React.Component{
  render(){
    return (
        <>
          <h1 className="title">Plan it Up!</h1>
        </>
    )
  }
}

export default Title;