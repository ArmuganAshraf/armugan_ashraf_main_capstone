import React from 'react';


class Food extends React.Component{
  render(){
    return(
      <>
      <div>{this.props.list.map(item => (
      <div key={item.id}>
            <img src={item.image} />
            <h4>{item.title}</h4>
            <p>{item.readyInMinutes} mins</p>
            <p>serves {item.servings}</p>
      </div>
          )
        )}
      </div>
    </>
    )
  }
}

export default Food;