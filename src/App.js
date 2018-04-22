import React, { Component } from 'react';
import './App.css';
import images from "./images.json";
import Card from "./components/Card/card";
import Nav from "./components/Nav/nav";


class App extends Component {

  state = {
    selected: [],
    topScore: 0,
    currentScore: 0
  }
  
  updateSelected = name => {
    if(this.state.selected.indexOf(name) > -1){
      alert("Incorrect, try again.")
      this.setState({ selected: [] })
    
      if(this.state.currentScore > this.state.topScore){
        this.setState({ topScore: this.state.currentScore })
      }

      this.setState({ score: 0 })
  
      return;
    } else {
      var currentScore = this.state.currentScore;
      currentScore++;

      if(currentScore > this.state.topScore){
        this.setState({ topScore: currentScore })
      }
      this.setState({ currentScore: currentScore })
    }

    let selected = this.state.selected
    selected.push(name)    
    this.setState({ selected })
    console.log(this.state.selected)
  }

  randomImage = () => {
    const imgArr = [];
      while(imgArr.length !== images.length){
        let image = images[Math.floor(Math.random() * images.length)];
        if(imgArr.indexOf(image)<0){
          imgArr.push(image)
        }
      }
    return imgArr
  }

  render() {
    return (
      
      <div className="body">
        
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>      
        <link href="https://fonts.googleapis.com/css?family=Allan" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Droid+Sans" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet" />
        <link href="css/hover.css" rel="stylesheet" media="all"/>
        <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>  

        <Nav currentScore={this.state.currentScore} topScore={this.state.topScore}/>
          <div className="body-div">
            <div id="pics">
              { this.randomImage().map(p => 
                  ( 
                  <Card  updateSelected={this.updateSelected} 
                          name={p.name} 
                          img={p.img}/> 
                  ))
              }
            </div> 
            <div className="footer">
              <div id="closing">
                <p>Bettina Junghahn | © Copyright 2018</p>
                <p>  
                  <a className="hvr-bob" href="https://github.com/bettijung/"> GitHub.com/BettiJung |</a> 
                  <a className="hvr-bob" href="https://www.linkedin.com/in/bettinajunghahn/">| LinkedIn.com/in/BettinaJunghahn</a></p>
              </div>
            </div>
          </div>  
      </div>
    );
  }
}

export default App;
