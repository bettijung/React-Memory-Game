import React from "react";
import "./nav.css";

class nav extends React.Component {
    render() {
        return(
            <div className="header">
                <div className="title">
                    <h1>Web Dev Memory Game</h1>
                    <h4>Click on an image to earn points.</h4>
                    <h4>Make sure not to click on an image more than once!</h4>
                </div>
                <div className="scores">
                    <p id="score">Score: {this.props.currentScore} | High Score: {this.props.topScore}</p>
                </div>
            </div>
        )
    }
}

export default nav;