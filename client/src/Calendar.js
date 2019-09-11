import React, { Component } from "react";
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import Navbar from './components/NavBar/Navbar';
import {Link} from "react-router-dom";


import "./FoodButton.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from 'axios';

const localizer = momentLocalizer(moment);

class CalendarEvents extends Component {

    state = {
        events : []
      };

    componentDidMount(){
        axios.get('http://localhost:8080/calendar')
        .then(response => {
            this.setState({
                events: response.data
                
              });
        });
    }    
    nextDay(d, dow){
        var returnDate = new Date();
        returnDate.setDate(d.getDate() + (dow+(7-d.getDay())) % 7);
        return returnDate;
    }
    
  render() {
    const d = new Date();
    
    //console.log(date.getDate(), date.getMonth()+1, date.getFullYear());
    console.log(new Date);
    const monL = this.state.events.filter(t=>t.plans ==='Monday Lunch');
    let monLE = {};
    
    if(monL.length !== 0){
        const date = this.nextDay(d,1);
        monLE = {
            
            end:  new Date(date),
            start:new Date (date),
            title: monL[0].title
        };
        console.log(monLE)
    }
    
    const monD = this.state.events.filter(t=>t.plans ==='Monday Dinner');
    let monDE = {};
    if(monD.length !== 0){
        const date = this.nextDay(d,1);
        monDE = {
            end:  new Date(date),
            start:new Date (date),
            title: monD[0].title
        };
    }
    
    const tueL = this.state.events.filter(t=>t.plans ==='Tuesday Lunch');
    let tueLE = {};
    if(tueL.length !== 0){
        const date = this.nextDay(d,2);
        tueLE = {
            end:  new Date(date),
            start:new Date (date),
            title: tueL[0].title
        };
    }

    const tueD = this.state.events.filter(t=>t.plans ==='Tuesday Dinner');
    let tueDE = {};
    if(tueD.length !== 0){
        const date = this.nextDay(d,2);
        tueDE = {
            end:  new Date(date),
            start:new Date (date),
            title: tueD[0].title
        };
    }
    
    const wedL = this.state.events.filter(t=>t.plans ==='Wednesday Lunch');
    let wedLE = {};
    if(wedL.length !== 0){
        const date = this.nextDay(d,3);
        wedLE = {
            end:  new Date(date),
            start:new Date (date),
            title: wedL[0].title
        };
    }

    const wedD = this.state.events.filter(t=>t.plans ==='Wednesday Dinner');
    let wedDE = {};
    if(wedD.length !== 0){
        const date = this.nextDay(d,3);
        wedDE = {
            end:  new Date(date),
            start:new Date (date),
            title: wedD[0].title
        };
    }
    
    const thuL = this.state.events.filter(t=>t.plans ==='Thursday Lunch');
    let thuLE = {};
    if(thuL.length !== 0){
        const date = this.nextDay(d,4);
        thuLE = {
            end:  new Date(date),
            start:new Date (date),
            title: thuL[0].title
        };
    }

    const thuD = this.state.events.filter(t=>t.plans ==='Thursday Dinner');
    let thuDE = {};
    if(thuD.length !== 0){
        const date = this.nextDay(d,4);
        thuDE = {
            end:  new Date(date),
            start:new Date (date),
            title: thuD[0].title
        };
    }
    
    const friL = this.state.events.filter(t=>t.plans ==='Friday Lunch');
    let friLE = {};
    if(friL.length !== 0){
        const date = this.nextDay(d,5);
        friLE = {
            end:  new Date(date),
            start:new Date (date),
            title: friL[0].title
        };
    }

    const friD = this.state.events.filter(t=>t.plans ==='Friday Dinner');
    let friDE = {};
    if(friD.length !== 0){
        const date = this.nextDay(d,5);
        friDE = {
            end:  new Date(date),
            start:new Date (date),
            title: friD[0].title
        };
    }
    
    const satL = this.state.events.filter(t=>t.plans ==='Saturday Lunch');
    let satLE = {};
    if(satL.length !== 0){
        const date = this.nextDay(d,6);
        satLE = {
            end:  new Date(date),
            start:new Date (date),
            title: satL[0].title
        };
    }

    const satD = this.state.events.filter(t=>t.plans ==='Saturday Dinner');
    let satDE = {};
    if(satD.length !== 0){
        const date = this.nextDay(d,6);
        satDE = {
            end:  new Date(date),
            start:new Date (date),
            title: satD[0].title
        };
    }
    
    const sunL = this.state.events.filter(t=>t.plans ==='Sunday Lunch');
    let sunLE = {};
    if(sunL.length !== 0){
        const date = this.nextDay(d,0);
        sunLE = {
            end:  new Date(date),
            start:new Date (date),
            title: sunL[0].title
        };
    }

    const sunD = this.state.events.filter(t=>t.plans ==='Sunday Dinner');
    let sunDE = {};
    if(sunD.length !== 0){
        const date = this.nextDay(d,0);
        sunDE = {
            end:  new Date(date),
            start:new Date (date),
            title: sunD[0].title
        };
    }
    

    const dEvents = [monLE, monDE,tueLE, tueDE, wedLE, wedDE, thuLE, thuDE, friLE, friDE, satLE, satDE, sunLE, sunDE];

    return (
    <>
        <div className="food1">
            <div className="food">
                <Link to="/mealplan"><button className="food__button1">Menu</button></Link>
                <Link to="/"><button className="food__button2">Home</button></Link>
            </div>
            <div>
                <Navbar />
            </div>  
        </div>
        <div className="background">
            <div className="App">
                <Calendar
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="week"
                events={dEvents}
                style={{ height: "600px" }}
                startAccessor='start'
                endAccessor='end'
                />
            </div>
        </div>
    </>
      );
  }
}

export default CalendarEvents;