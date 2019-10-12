import React from 'react';
import axios from 'axios';
import { Grid, GridColumn as Column, GridCell, GridDetailRow } from '@progress/kendo-react-grid';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import moment from 'moment';
import {Link} from 'react-router-dom';
import Navbar from "./components/NavBar/Navbar";
import "./FoodButton.css";

import ApiCalendar from 'react-google-calendar-api';

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
    //const nextDay = this.nextDay.bind(this);
    this.itemChange = this.itemChange.bind(this);

    class MyCommandCell extends GridCell {
      
      render() {
        const alertvalue = this.props.dataItem.plans;
          return (
                  <td>
                      <button
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
      //console.log(response);
    })
    .catch(function (error) {
      //console.log(error);
    });

     this.setState({
         data: this.state.cuisine.slice()
     });
     const summary = dataItem.title;
     
     const nextDay  = function(d, dow) {
      var returnDate = new Date();
      returnDate.setDate(d.getDate() + (dow+(7-d.getDay())) % 7);
      return returnDate;
     };
       
    
     const d = new Date();
     let startTime = "";
     let endTime = "";

     if(dataItem.plans === "Monday Lunch"){
      const date= nextDay(d,1);
      startTime = new Date (`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T12:00:00`);
      endTime = new Date(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T14:00:00`);
     }
     console.log(startTime, endTime);

     if(dataItem.plans === "Monday Dinner"){
      const date= nextDay(d,1);
      startTime = new Date (`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T18:00:00`);
      endTime = new Date(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T20:00:00`);
     }
     if(dataItem.plans === "Tuesday Lunch"){
      const date= nextDay(d,2);
      startTime = new Date (`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T12:00:00`);
      endTime = new Date(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T14:00:00`);
     }
     if(dataItem.plans === "Tuesday Dinner"){
      const date= nextDay(d,2);
      startTime = new Date (`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T18:00:00`);
      endTime = new Date(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T20:00:00`);
     }
     if(dataItem.plans === "Wednesday Lunch"){
      const date= nextDay(d,3);
      startTime = new Date (`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T12:00:00`);
      endTime = new Date(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T14:00:00`);
     }
     if(dataItem.plans === "Wednesday Dinner"){
      const date= nextDay(d,3);
      startTime = new Date (`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T18:00:00`);
      endTime = new Date(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T20:00:00`);
     }
     if(dataItem.plans === "Thursday Lunch"){
      const date= nextDay(d,4);
      startTime = new Date (`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T12:00:00`);
      endTime = new Date(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T14:00:00`);
     }
     if(dataItem.plans === "Thursday Dinner"){
      const date= nextDay(d,4);
      startTime = new Date (`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T18:00:00`);
      endTime = new Date(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T20:00:00`);
     }
     if(dataItem.plans === "Friday Lunch"){
      const date= nextDay(d,5);
      startTime = new Date (`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T12:00:00`);
      endTime = new Date(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T14:00:00`);
     }
     if(dataItem.plans === "Friday Dinner"){
      const date= nextDay(d,5);
      startTime = new Date (`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T18:00:00`);
      endTime = new Date(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T20:00:00`);
     }
     if(dataItem.plans === "Saturday Lunch"){
      const date= nextDay(d,6);
      startTime = new Date (`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T12:00:00`);
      endTime = new Date(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T14:00:00`);
     }
     if(dataItem.plans === "Saturday Dinner"){
      const date= nextDay(d,6);
      startTime = new Date (`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T18:00:00`);
      endTime = new Date(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T20:00:00`);
     }
     if(dataItem.plans === "Sunday Lunch"){
      const date= nextDay(d,0);
      startTime = new Date (`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T12:00:00`);
      endTime = new Date(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T14:00:00`);
     }
     if(dataItem.plans === "Sunday Dinner"){
      const date= nextDay(d,0);
      startTime = new Date (`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T18:00:00`);
      endTime = new Date(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T20:00:00`);
     }

     const event = {
      'summary': summary,
      'start': {
        'dateTime': startTime,
        'timeZone': 'America/New_York'
      },
      'end': {
        'dateTime': endTime,
        'timeZone': 'America/New_York'
      }
    };

   // console.log(dataItem);

    ApiCalendar.createEvent(event, '6qdmpjif8r89dk7sdghbvf390o@group.calendar.google.com')
    .then((result) => {
      //console.log(result);
        })
     .catch((error) => {
       //console.log(error);
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
      <div className="food">
          <Link to="Calendar"><button className="food__button1">Calendar</button></Link>
          <Link to="/"><button className="food__button2">Home</button></Link>
        </div>
      <div className="food1">
      <div>
        <Navbar />
      </div>
      <div className="background">
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
      </div> 
      </>
    );
  }
}

export default App;
