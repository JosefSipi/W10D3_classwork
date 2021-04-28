import React from 'react';
import * as Minesweeper from '../minesweeper.js';
import Board from "./board"


class Game extends React.Component {
    constructor(prop) {
        super(prop);
        const board = new Minesweeper.Board(8,5)
        board.generateBoard();
        this.state = { board: board.grid};
        this.updateGame = this.updateGame.bind(this)
        console.log(board)
    }

    updateGame(){

    }

    render(){
     
        return (
                < Board board={this.state.board} updateGame={this.updateGame} />
            
        )
            
    }

}

export default Game;