import * as Minesweeper from './minesweeper.js';
import Game from "./components/game.jsx";
import React from 'react';
import ReactDOM from 'react-dom';


document.addEventListener("DOMContentLoaded", () => {
    const game = document.getElementById("main")
    
    ReactDOM.render(<Game/>, game)
})

