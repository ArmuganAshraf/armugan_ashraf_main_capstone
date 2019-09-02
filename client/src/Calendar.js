import React, { Component } from "react";
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';

import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class CalendarEvents extends Component {

  render() {
    //const evnt = this.props.evnt;
    //const monL = evnt.filter(t=>t.plans ==='Monday Lunch');
    //console.log("P: "+monL);
    const monLE = {
        end: new Date('September 02, 2019 14:00:00'),
        start: new Date('September 02, 2019 12:00:00'),
        title: 'Hi'
    };
    //console.log("Q: "+monLE);
    //const monD = evnt.filter(t=>t.plans ==='Monday Dinner');
    //const monL = evnt.filter(t=>t.plans ==='Monday Lunch');

    // const dummyEvents = [
    //     {
    //       allDay: false,
    //       end: new Date('December 09, 2017 20:00:00'),
    //       start: new Date('December 09, 2017 06:00:00'),
    //       title: 'hi',
    //     }
    // ]

    const events = [monLE];

    return (
      <div className="App">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="week"
          events={events}
          style={{ height: "600px" }}
          startAccessor='start'
          endAccessor='end'
        />
      </div>
    );
  }
}

export default CalendarEvents;