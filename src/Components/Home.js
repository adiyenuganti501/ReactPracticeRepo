import React from 'react';
import QuickSearch from './QuickSearch';
import image from '../Assets/images/image.jpg'
import styles from './Home.css'
const hurl = "https://developerfunnel.herokuapp.com/hotels?city=";

export default class Home extends React.Component {

    state = {
        CityData: [],
        HotelData: []
    }
    async componentDidMount() {
        const url = " https://developerfunnel.herokuapp.com/location"
        const Result = await fetch(url);
        const citylist = await Result.json();
        //console.log(citylist);
        this.setState({
            CityData: citylist

        }
        )

    }




    fethHotel = (event) => {
        //let target = event.target.value;
         console.log(event.target.value);
        fetch(`${hurl}${event.target.value}`,{method:'GET'})
        .then ((res)=> res.json())
        .then ((HotelList)=>{
            this.setState({HotelData:HotelList})
            console.log(HotelList);

        })


    }
    render() {

        return (
            <React.Fragment>
           
                <div className='bannerOne '>
                    <img src={image} alt="Image Here" />
                    <div className="CitySelector"> <select onChange={this.fethHotel} className="OptionStyle">
                    <option>----SELECT CITY-----</option>
                        {this.state.CityData.map((obj) => {
                        return <option value={obj._id}>  {obj.city_name} </option>
                    })} </select>

                        <select className="OptionStyle">
                        <option>----SELECT HOTEL-----</option>
                          {this.state.HotelData.map((obj)=>{
                              return <option> {obj.name}</option>
                          })}
                            
                        </select>
                    </div>
                </div>
               <QuickSearch/>
               

               
            </React.Fragment>
 


        )
    }

}