import React from "react";
import "./card.css";

class card extends React.Component {
    render() {
        return(
            <div className= "card">
                <img onClick={() => this.props.updateSelected(this.props.name)} name={this.props.name} className="card-img hvr-wobble-horizontal" src={this.props.img} alt=""/>
            </div>
        )
    }
}
export default card;