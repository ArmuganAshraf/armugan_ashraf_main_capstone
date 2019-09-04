import React from 'react';
import './Food.scss';


class Food extends React.Component{

  baseUrl = 'https://spoonacular.com/recipeImages/';

  render(){
    return(
      <>
        <div className='card'>{this.props.list.map(item => (
          <div key={item.id} className='card__item'>
            <img src={this.baseUrl+item.image} width='100px' height='100px'/>
            <h4>{item.title}</h4>
            <p>{item.readyInMinutes} mins</p>
            <p>serves {item.servings}</p>
          <div>
          Select Day:
          <select>
            <option value='Monday'>Monday</option>
            <option value='Tuesday'>Tuesday</option>
            <option value='Wednesday'>Wednesday</option>
            <option value='Thursday'>Thursday</option>
            <option value='Friday'>Friday</option>
            <option value='Saturday'>Saturday</option>
            <option value='Sunday'>Sunday</option>
          </select>
        </div>
      <div>
          Meal:
          <select>
            <option value='Lunch'>Lunch</option>
            <option value='Dinner'>Dinner</option>
          </select>
          </div>
        </div>
          )
        )}
      </div>
    </>
    )
  }
}

export default Food;