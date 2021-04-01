import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './Header.css';
import { Container } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
//import ListData from './ListData';
import About from './About';

import ContactUs from "./ContactUs";
import Home from "./Home";
//import Home from './Home';



export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            title: "Hello React ",

        }

    }
    render() {
        return (
            <React.Fragment>
                <Container  >

                    <h2>{this.state.title} </h2>

                    <Router>

                        <ul>
                            <li> <Link to="/home">Home</Link></li>
                            <li> <Link to="/about">About Hotels</Link></li>
                            <li> <Link to="/contactUS">Contact US</Link></li>

                        </ul>
                        <Switch>
                            <Route path="/home">
                                <Home />
                            </Route>
                            <Route path="/home">
                                <Home />
                            </Route>
                            <Router path="/about">
                                <About />
                            </Router>
                            <Router path="/contactUS">
                                <ContactUs />
                            </Router>
                            
                                
                           
                        </Switch>
                      
                    </Router>



                </Container>
            </React.Fragment>



        )

    }

}