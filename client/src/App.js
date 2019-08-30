import React from 'react';
import logo from './logo.svg';
import './App.css';
import MealPlan from './components/MealPlan/MealPlan';
import Navbar from './components/NavBar/Navbar';
import Food from './components/MealPlan/Food';
import cuisine from './components/Data/cuisine';

class App extends React.Component{
  render(){
    return(
      <>
        <Navbar />
        <MealPlan />
      </>
    )
  }
}

export default App;
