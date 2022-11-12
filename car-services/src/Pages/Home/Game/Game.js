import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Games.css';
const Game = ({game}) => {
    const {id, name, img, description, price} = game;
    const navigate = useNavigate()
    const navigateToGameDetails = id => {
         navigate(`/games/${id}`)
    }
    return (
        <div className='games'>
            <img height={200} className="card-img-top" src={img} alt="" />
            <h2>{name}</h2>
            <h4>${price}</h4>
            <p>{description}</p>
            <button onClick={() => navigateToGameDetails(id)} className='btn btn-dark'>Buy Now</button>
        </div>
    );
};

export default Game;