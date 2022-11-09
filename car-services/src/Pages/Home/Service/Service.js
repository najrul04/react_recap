import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
const Service = ({service}) => {
    const {id, name, img, description, price} = service;
    const navigate = useNavigate()
    const navigateToServiceDetails = id => {
         navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>${price}</h4>
            <p>{description}</p>
            <button onClick={() => navigateToServiceDetails(id)} className='btn btn-primary'>Book this service</button>
        </div>
    );
};

export default Service;