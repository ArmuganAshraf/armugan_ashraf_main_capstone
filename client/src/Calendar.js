import React, { Component } from "react";
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';

import "./App.css";
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
    

    const dEvents = [monLE, monDE];

    return (
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
      
      );
  }
}

export default CalendarEvents;