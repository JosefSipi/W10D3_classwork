import React from "react";


class Tile extends React.Component {
    constructor(props){
        super(props);
    }

    handleClick(event){
        event.target.classList.add("revealed");
        const altKeyPressed = event.altKey;
        debugger
        this.props.updateGame(this.props.tile, altKeyPressed);
    }

    render(){
        let text = "";
        let status = "";

            if ((this.props.tile.bombed === true) && (this.props.tile.explored === true)) {
                text = "B";
                status = "bombed";
            }
            else if (this.props.tile.flagged === true) {
                debugger
                text = "F";
                status = "flagged";
            }
            else if ((this.props.tile.adjacentBombCount() > 1) && (this.props.tile.explored === true)){

                text = `${this.props.tile.adjacentBombCount()}`;
                status = "revealed";
            } 

        return (
            <div onClick={this.handleClick.bind(this)} status ={status} className="tile">{text}</div>
        )
            
        
    }
}

export default Tile;