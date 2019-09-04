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
    
  render() {
    const monL = this.state.events.filter(t=>t.plans ==='Monday Lunch');
    let monLE = {};
    if(monL.length != 0){
        monLE = {
            end: new Date('September 02, 2019 14:00:00'),
            start: new Date('September 02, 2019 12:00:00'),
            title: monL[0].title
        };
    }

    const monD = this.state.events.filter(t=>t.plans ==='Monday Dinner');
    let monDE = {};
    if(monD.length != 0){
        monDE = {
            end: new Date('September 02, 2019 20:00:00'),
            start: new Date('September 02, 2019 17:00:00'),
            title: monD[0].title
        };
    }
    
    const tueL = this.state.events.filter(t=>t.plans ==='Tuesday Lunch');
    let tueLE = {};
    if(tueL.length != 0){
        tueLE = {
            end: new Date('September 03, 2019 14:00:00'),
            start: new Date('September 03, 2019 12:00:00'),
            title: tueL[0].title
        };
    }

    const tueD = this.state.events.filter(t=>t.plans ==='Tuesday Dinner');
    let tueDE = {};
    if(tueD.length != 0){
        tueDE = {
            end: new Date('September 03, 2019 20:00:00'),
            start: new Date('September 03, 2019 17:00:00'),
            title: tueD[0].title
        };
    }
    
    const wedL = this.state.events.filter(t=>t.plans ==='Wednesday Lunch');
    let wedLE = {};
    if(wedL.length != 0){
        wedLE = {
            end: new Date('September 04, 2019 14:00:00'),
            start: new Date('September 04, 2019 12:00:00'),
            title: wedL[0].title
        };
    }

    const wedD = this.state.events.filter(t=>t.plans ==='Wednesday Dinner');
    let wedDE = {};
    if(wedD.length != 0){
        wedDE = {
            end: new Date('September 04, 2019 20:00:00'),
            start: new Date('September 04, 2019 17:00:00'),
            title: wedD[0].title
        };
    }
    
    const thuL = this.state.events.filter(t=>t.plans ==='Thursday Lunch');
    let thuLE = {};
    if(thuL.length != 0){
        thuLE = {
            end: new Date('September 05, 2019 14:00:00'),
            start: new Date('September 05, 2019 12:00:00'),
            title: thuL[0].title
        };
    }

    const thuD = this.state.events.filter(t=>t.plans ==='Thursday Dinner');
    let thuDE = {};
    if(thuD.length != 0){
        thuDE = {
            end: new Date('September 05, 2019 20:00:00'),
            start: new Date('September 05, 2019 17:00:00'),
            title: thuD[0].title
        };
    }
    
    const friL = this.state.events.filter(t=>t.plans ==='Friday Lunch');
    let friLE = {};
    if(friL.length != 0){
        friLE = {
            end: new Date('September 06, 2019 14:00:00'),
            start: new Date('September 06, 2019 12:00:00'),
            title: friL[0].title
        };
    }

    const friD = this.state.events.filter(t=>t.plans ==='Friday Dinner');
    let friDE = {};
    if(friD.length != 0){
        friDE = {
            end: new Date('September 06, 2019 20:00:00'),
            start: new Date('September 06, 2019 17:00:00'),
            title: friD[0].title
        };
    }
    
    const satL = this.state.events.filter(t=>t.plans ==='Saturday Lunch');
    let satLE = {};
    if(satL.length != 0){
        satLE = {
            end: new Date('September 07, 2019 14:00:00'),
            start: new Date('September 07, 2019 12:00:00'),
            title: satL[0].title
        };
    }

    const satD = this.state.events.filter(t=>t.plans ==='Saturday Dinner');
    let satDE = {};
    if(satD.length != 0){
        satDE = {
            end: new Date('September 07, 2019 20:00:00'),
            start: new Date('September 07, 2019 17:00:00'),
            title: satD[0].title
        };
    }
    
    const sunL = this.state.events.filter(t=>t.plans ==='Sunday Lunch');
    let sunLE = {};
    if(sunL.length != 0){
        sunLE = {
            end: new Date('September 08, 2019 14:00:00'),
            start: new Date('September 08, 2019 12:00:00'),
            title: sunL[0].title
        };
    }

    const sunD = this.state.events.filter(t=>t.plans ==='Sunday Dinner');
    let sunDE = {};
    if(sunD.length != 0){
        sunDE = {
            end: new Date('September 08, 2019 20:00:00'),
            start: new Date('September 08, 2019 17:00:00'),
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