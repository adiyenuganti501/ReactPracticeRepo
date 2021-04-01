import React from 'react';
import styles from './CostFilter.css';
import axios from 'axios';
const url="https://developerfunnel.herokuapp.com/hotellist/1?roomtype=1"

export default class CostFilter extends React.Component{
    filterRooms =(event) =>{
        let roomID = event.target.value;
        let tripID = sessionStorage.getItem('tripid');
        let roomUrl;
        if(roomID==''){
            roomUrl= `${url}/${tripID}`
        }else{
            roomUrl= `${url}/${tripID}?roomtype=${roomID}`
        }
        axios.get(roomUrl)
        .then((response) => {this.props.roomPerType(response.data)})
    }

    render(){
        return(
        <React.Fragment>
            <section  onChange={this.filterRooms}>
                <input  type="radio" name="room" value="1" />  All 
           
                <input  type="radio" name="room" value="2" />  Delux Room 
                <input  type="radio" name="room" value="3" />  Premium Room 
                <input  type="radio" name="room" value="4" />  Semi Delux Room 
            </section>
            
        </React.Fragment>
           
        )
    }  
}