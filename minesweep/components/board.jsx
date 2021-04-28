import React from 'react'
import Tile from './tile.jsx'

class Board extends React.Component{
    constructor(props){
        super(props)
       
    }

    render(){
        console.log(this.props.board)
      return (  <div>
                    {this.props.board.map((el1, idx) =>{
                        return <div key={idx} id={idx}>
                            {el1.map((el2, idx) => {
                               return  <Tile key={idx} tile={el2} updateGame = {this.props.updateGame} />
                            })}
                        </div>
                    })}
                 </div>
            )
    }
}

export default Board;