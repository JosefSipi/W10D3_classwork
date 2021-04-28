import React from 'react';
import * as Minesweeper from './components/minesweeper.js';

class Game extends React.Component {
    constructor(prop) {
        super(prop);
        const board = new Minesweeper.Board();
        this.state = { board: board};
    }

}