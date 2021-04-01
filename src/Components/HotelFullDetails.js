import React from "react";
import { Link } from 'react-router-dom';
import styles from './HotelFullDetails.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const url = "https://developerfunnel.herokuapp.com/hotelsdetails/";

export default class HotelFullDetails extends React.Component {

    state = {
        HotelFullDetails: []
    }
    render() {

        return (

            <React.Fragment>
                <Container>
                    <Row>
                        <Col>
                            <img src={this.state.HotelFullDetails.thumb} class="rounded" height="300" width="600" />
                        </Col>
                        <Col>

                            <h1>{this.state.HotelFullDetails.name} </h1>
                            <h4>  {this.state.HotelFullDetails.city_name} </h4>
                            <h6>{this.state.HotelFullDetails.locality}  </h6>
                            <h6> Cost per night :{this.state.HotelFullDetails.cost}</h6>

                        </Col>
                    </Row>
                </Container>
                <hr></hr>
                <Container>
                    <Tabs>
                        <TabList>
                            <Tab className="tabStyle">Overview</Tab>
                            <Tab className="tabStyle">Contact</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>About This Place</h2>
                            <p> {this.state.HotelFullDetails.name}</p>

                        </TabPanel>
                        <TabPanel>
                            <h3>{this.state.HotelFullDetails.address}</h3>
                            <h2>Phno: 786767678</h2>
                        </TabPanel>

                    </Tabs>

                    <Link to={`/`} className="btn btn-danger">Back</Link>
                    <Link to={`/booking/${this.state.HotelFullDetails.name}`} className="btn btn-success">Place Booking</Link>
                </Container>

            </React.Fragment>
        )
    }



    async componentDidMount() {
        var HotelId = this.props.match.params.id;
        console.log(HotelId);

        await fetch(`${url}${HotelId}`, { method: 'GET' })
            .then((res) => res.json())
            .then((ResultData) => {
                this.setState({ HotelFullDetails: ResultData[0] })
                console.log(ResultData);
            })
    }
}