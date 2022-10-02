import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props.country);
    // const {area} = props.country;
    return (
        <div className='country'>
            {/* <p>Area {area}</p> */}
            {/* <p>Area {name.common}</p> */}
            <p>a</p>
        </div>
    );
};

export default Country;

/* 

<h1>Country Name: {props.name}</h1> 
      <h3>Capital: {props.capital}</h3> 
      <h4>Region: {props.region}</h4> 
      <h4>Population: {props.population} Person</h4> 
      <h4>Subregion: {props.subregion} </h4> 
      <img src={props.flags} alt="asdds" /> <br />
      <p>Currency: {props.currencies} </p> 
      <small>Area: {props.area}</small> 

*/