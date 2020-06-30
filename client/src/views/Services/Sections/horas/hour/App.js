import React, { Component } from 'react';
import Main from './Main';


export default class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Occupied_hour: ["10:00-12:00","18:30-20:45", "8:00-9:00" ,"15:00-16:15"],
            selected_hour: [],
            last_hour: 21,
            init_hour: 7
        }
    }

    createReservation = (hour,min) =>{
        console.log(hour,min)
        this.setState({
            selected_hour: `${hour-1}:${min}-${hour}:${min}`
        })
    }
    
    render() {
        console.log(this.state.selected_hour)
        return (
            <div>
                <Main 
                occupied_hour={this.state.Occupied_hour}
                selected_hour={this.state.selected_hour}
                last_hour={this.state.last_hour}
                init_hour={this.state.init_hour}
                click = {this.createReservation}
                />
            </div>
        )
    }
}
