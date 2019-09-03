import React from 'react';
import axios from 'axios';
import { Grid, GridColumn as Column, GridCell, GridDetailRow } from '@progress/kendo-react-grid';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import {Link} from 'react-router-dom';
import Navbar from "./components/NavBar/Navbar";
import "./FoodButton.css";

class DetailComponent extends GridDetailRow {
  render() {
      const dataItem = this.props.dataItem;
      let image = 'https://spoonacular.com/recipeImages/';
      return (
          <section>
             
              <p><strong>Ingredients:</strong> 
                <ul>
                {
                  dataItem.ingredients.map((item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                ))}
                </ul>
              </p>
              <p><strong>Recipe:</strong> 
                <ul>
                {
                  dataItem.recipe.map((item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                ))}
                </ul>
              </p>
          </section>
      );
  }
}

class MyImageCell extends GridCell {
  render() {
    let image = 'https://spoonacular.com/recipeImages/';
      return (
              <td>
                  <img src={image+this.props.dataItem.image} alt="" width="200px" height="200px"  />
              </td>
          ) ;
  }
}

class DropDownCell extends GridCell {

  handleChange(e) {
      this.props.onChange({
          dataItem: this.props.dataItem,
          field: this.props.field,
          syntheticEvent: e.syntheticEvent,
          value: e.target.value.value
      });
  }
  render() {
    //const dataValue = this.props.dataItem[this.props.field];
      return (
          <td>
              <DropDownList
                  style={{ width: "200px" }}
                  onChange={this.handleChange.bind(this)}
                  //value={dataValue}
                  data={[
                      { text: 'Monday Lunch', value: 'Monday Lunch' },
                      { text: 'Tuesday Lunch', value: 'Tuesday Lunch' },
                      { text: 'Wednesday Lunch', value: 'Wednesday Lunch' },
                      { text: 'Thursday Lunch', value: 'Thursday Lunch' },
                      { text: 'Friday Lunch', value: 'Friday Lunch' },
                      { text: 'Saturday Lunch', value: 'Saturday Lunch' },
                      { text: 'Sunday Lunch', value: 'Sunday Lunch' },
                      { text: 'Monday Dinner', value: 'Monday Dinner' },
                      { text: 'Tuesday Dinner', value: 'Tuesday Dinner' },
                      { text: 'Wednesday Dinner', value: 'Wednesday Dinner' },
                      { text: 'Thursday Dinner', value: 'Thursday Dinner' },
                      { text: 'Friday Dinner', value: 'Friday Dinner' },
                      { text: 'Saturday Dinner', value: 'Saturday Dinner' },
                      { text: 'Sunday Dinner', value: 'Sunday Dinner' }
                  ]}
                  valueField="value"
                  textField="text"
              />
          </td>
      );
  }
}


class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      cuisine : []
    };

    const addToPlan = this.addToPlan.bind(this);
    this.itemChange = this.itemChange.bind(this);

    class MyCommandCell extends GridCell {
      
      render() {
        const alertvalue = this.props.dataItem.plans;
          return (
                  <td>
                      <button
                          className="k-primary k-button k-grid-edit-command"
                          onClick={() => addToPlan(this.props.dataItem) + alert("your choice is now added to " + alertvalue + " on the calendar")}
                      > Add
                          </button>
                  </td>
              ) ;
      }
    }
    this.commandCell = MyCommandCell;
  }

  imageCell = MyImageCell;
  
  componentDidMount(){
    this.foodData();
  }

  foodData = () => {
    axios.get("http://localhost:8080/").then(response => {
      this.setState({
        cuisine: response.data
        
      });
    });
  };

  expandChange = (event) => {
    event.dataItem.expanded = !event.dataItem.expanded;
    this.forceUpdate();
  }

  addToPlan(dataItem) {
    axios.post('http://localhost:8080/', {
      meal: dataItem
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

     this.setState({
         data: this.state.cuisine.slice()
     });
  }

  itemChange(event) {
    const value = event.value;
    const name = event.field;
    if (!name) {
        return;
    }
    const updatedData = this.state.cuisine.slice();
    const item = this.update(updatedData, event.dataItem);
    item[name] = value;
    this.setState({
      cuisine: updatedData
    });
  }


  update(data, item, remove) {
    let updated;
    let index = data.findIndex(p => p === item || item.ProductID && p.ProductID === item.ProductID);
    if (index >= 0) {
        updated = Object.assign({}, item);
        data[index] = updated;
    } else {
        let id = 1;
        data.forEach(p => { id = Math.max(p.ProductID + 1, id); });
        updated = Object.assign({}, item, { ProductID: id });
        data.unshift(updated);
        index = 0;
    }

    if (remove) {
        return data.splice(index, 1)[0];
    }

    return data[index];
  }


  render() {
    const evnt = this.state.cuisine;
    return (
      <>
      <div className="food1">
      <div>
        <Navbar />
        <div className="food">
          <Link to="Calendar"><button className="food__button">Review Calendar</button></Link>
          <Link to="/"><button className="food__button">Home</button></Link>
        </div>
      </div>
      
        <Grid
            data={this.state.cuisine}
            onItemChange={this.itemChange}
            detail={DetailComponent}
            style={{ height: '1200px' }}
            expandField="expanded"
            onExpandChange={this.expandChange}
        >
            <Column field="image" cell={this.imageCell} />
            <Column field="title" title="Title" width="300px" />
            <Column field="readyInMinutes" title="Ready in Minutes" width="200px" />
            <Column field="servings" title="Servings" width="200px" />
            <Column field="plans" cell={DropDownCell} />
            <Column cell={this.commandCell} />
           
        </Grid>
      </div> 
      </>
    );
  }
}

export default App;
