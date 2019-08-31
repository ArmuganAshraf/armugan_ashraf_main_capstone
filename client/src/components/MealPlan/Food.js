import React from 'react';
import './Food.scss';
import Add from '../image/calendar.svg';

class Food extends React.Component{
  render(){
    return(
      <>
      <div className='card'>{this.props.list.map(item => (
      <div key={item.id} className='card__item'>
            <img src={item.imageUrls} />
            <h4>{item.title}</h4>
            <p>{item.readyInMinutes} mins</p>
            <p>serves {item.servings}</p>
            <button><img src={Add} width='40px' height='40px'/></button> 
      </div>
          )
        )}
      </div>
    </>
    )
  }
}

export default Food;