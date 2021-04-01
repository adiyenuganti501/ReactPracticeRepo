import React from 'react';

import { Link } from 'react-router-dom';
//import logo from '../Assets/images/logo.svg'


const ListingDisplay = (props) => {
    //console.log(props)

    return (
        <React.Fragment>

    

            {props.listdataValue.map((item) => {

                return <div> 
                    <Link to={`/details/${item._id}`}>
                        <img src={item.thumb} height="200" width="300" />
                        <h6> Price ={item.cost}</h6>
                        <h2> {item.name} </h2>
                        <div className="city_name">{item.city_name}</div>
                        <div className="address-text">{item.locality}</div>

                        <div className="address-text">{item.address}</div></Link>



                </div>
            })}
            
        </React.Fragment>
    )




}

export default ListingDisplay;