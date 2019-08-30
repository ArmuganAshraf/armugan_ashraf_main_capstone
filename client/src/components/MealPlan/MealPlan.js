import React from 'react';
import Food from './Food';
import axios from 'axios';
class MealPlan extends React.Component{
  state = {
    cuisine : []
  };
  
  componentDidMount(){
    this.foodData();
  }
  foodData = () => {
    axios.get("http://localhost:8080/").then(response => {
      console.log(response.data)
      this.setState({
        cuisine: response.data
        
      });
    });
  };
  
  render(){
    return(
      <>
        <h3>Meal Plan Options</h3>
        <p><Food list={this.state.cuisine}/></p>
        
      
      </>
    )
  }
}
export default MealPlan;