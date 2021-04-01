import React from 'react';
import ListingDisplay from './ListingDisplay';
import Cos from './CostFilter';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import CostFilter from './CostFilter';

const Durl = " https://developerfunnel.herokuapp.com/hotellist/";




export default class HotelDetails extends React.Component {


    state = {
        details:[]
    }
    setDataPerFilter=(data)=>{
        this.setState({hotellist:data})
    }

    render() {


        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col sm={3}>
                            <CostFilter  roomPerType={(data) => {this.setDataPerFilter(data)}}/>
                        </Col>
                        
                        <Col  sm={9}>
                           
                            <ListingDisplay listdataValue={this.state.details} />                        </Col>

                    </Row>
                </Container>
            </React.Fragment>
        )
    }



    async componentDidMount() {
        var tripId = this.props.match.params.id;
        sessionStorage.setItem('tripId',tripId)
        console.log(tripId);

        await fetch(`${Durl}${tripId}`, { method: 'GET' })
            .then((res) => res.json())
            .then((ResultData) => {
                this.setState({ details: ResultData})
                //console.log(ResultData);

            })




    }
}