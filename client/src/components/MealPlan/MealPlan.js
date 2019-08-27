import React from 'react';
import Cuisine from './Cuisine';

class MealPlan extends React.Component{
  render(){
    return(
      <>
      <h3>Meal Plan Options</h3>
      <ul>
        <li><Cuisine /></li>
        <li>Categories</li>
        <li>Dessert</li>
      </ul>
      </>
    )
  }
}
export default MealPlan;