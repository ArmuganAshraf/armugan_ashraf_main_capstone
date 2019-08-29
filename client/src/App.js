import React from 'react';
import logo from './logo.svg';
import './App.css';
import MealPlan from './components/MealPlan/MealPlan';
import Navbar from './components/NavBar/Navbar';

class App extends React.Component{
  render(){
    return(
      <>
        <Navbar />
      </>
    )
  }
}

export default App;
