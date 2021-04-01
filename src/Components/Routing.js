import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import {
    BrowserRouter, Route,
} from "react-router-dom";
import HotelDetails from "./HotelDetail";
import HotelFullDetails from './HotelFullDetails';




const Routing = () => {
    return (
        <BrowserRouter>

            <Route exact path="/" component={Header} />

            <Route exact path="/list/:id" component={HotelDetails} />
            <Route exact path="/details/:id" component={HotelFullDetails} />
            

            <Footer name="Audi@501" />

        </BrowserRouter>

    )

}
export default Routing;
