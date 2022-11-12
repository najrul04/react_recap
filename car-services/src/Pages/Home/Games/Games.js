import React, { useEffect, useState } from 'react';
import Game from '../Game/Game';
import './Games.css';

const Games = () => {
    const [games, setGames] = useState([])
    useEffect(() => {
        fetch('games.json')
        .then(res => res.json())
        .then(data => setGames(data))
    } , [])
    return (
        <div id="games" className='container'>
            <div className="row">
            <h1 className='text-dark text-center mt-5'> Games</h1>
            <div className="games-container">
           {
                games.map(game => <Game 
                    key={game.id}
                    game={game}
                ></Game>)
            }
        </div>
            </div>
                 </div>
    );
};

export default Games;