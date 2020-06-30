import React, { Component } from 'react';
import Table from './Table';
import './style.css';

export default class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Occupied_hour: props.occupied_hour,
             selected_hour: props.selected_hour,
             last_hour: props.last_hour,
             init_hour: props.init_hour
             
        }
    }
    
    static getDerivedStateFromProps(props, state) {
        state.selected_hour = props.selected_hour;
        state.Occupied_hour = props.occupied_hour;
        console.log(props)
        return true;
    }

    handleClick = (e) =>{
        let hour = parseInt(e.target.id.split(':')[0],10)
        let min = parseInt(e.target.id.split(':')[1],10)
        this.props.click(hour,min)
    }

    render() {
        console.log(this.state.Occupied_hour)
        return (
            <div className="container">
                <Table data={this.state.Occupied_hour} 
                selected_hour = {this.state.selected_hour}
                init_hour={this.state.init_hour} 
                last_hour={this.state.last_hour}
                handleClick = {this.handleClick}>
                </Table>
            </div>

        )
    }
}
