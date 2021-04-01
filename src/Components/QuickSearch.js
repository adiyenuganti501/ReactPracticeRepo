import React from 'react';
import { Link } from 'react-router-dom';
import styles from './QuickSearch.css';

import image from '../Assets/images/logo.svg'
import { Button, Container, Row, Col } from 'react-bootstrap';




export default class QuickSearch extends React.Component {
    constructor() {
        super()
    }

    state = {
        TypesOfTrip: []
    }



    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>   

                        <Col sm={12}><h3> Quick Search  </h3>
                            <Container>
                                <Row>

                                    {this.state.TypesOfTrip.map((obj) => {
                                        return <Link to={`/list/${obj._id}`}> <Col >

                                            <img src={obj.image} alt="Image Here" className="imageStyle" />
                                            <h5> {obj.name} </h5>
                                        </Col> </Link>
                                    })}

                                </Row>
                            </Container>

                        </Col>

                    </Row>
                </Container>
            </React.Fragment>

        )
    }


    async componentDidMount() {
        const FilterAPI = "https://developerfunnel.herokuapp.com/booking"
        const Result = await fetch(FilterAPI);
        const tripTypes = await Result.json();
        console.log(tripTypes);
        this.setState({
            TypesOfTrip: tripTypes
        })

    }

}

