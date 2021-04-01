import React from "react";
import styles from './Footer.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {  
        return (
            <React.Fragment>
                <Container>
                <hr></hr>

                <h3 className="FooterStyle">Copy Rights By {this.props.name}</h3>
                </Container>


            </React.Fragment>
        )
    }

}