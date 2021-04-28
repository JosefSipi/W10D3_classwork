import React from "react"


class Tile extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        let text = "hh"
        let status = ""
        if (this.props.tile.explored === true){

            if ((this.props.tile.bombed === true)) {
                text = "B"
                status = "bombed"
            }
            else if (this.props.tile.flagged === true) {
                text = "F"
                status = "flagged"
            }
            else if (this.props.tile.adjacetBombCount() > 1){
                text = `${this.props.tile.adjacetBombCount()}`
                status = "revealed"
            }
        }
        return (
            <div status ={status} className="tile">{text}</div>
        )
            
        
    }
}

export default Tile;