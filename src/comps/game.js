import React, { Component } from 'react';
import './comps.css';


export default class Game extends Component{

    constructor(){
        super()
  
        this.state = {

          sequence: [],
          sequencePiece: [],
          playerSequence: [],
          score: 0,
          clicks: 0,
          round: 1,
          red: false,
          blue: false,
          green: false,
          yellow: false,
          roundS: []
        }

        this.updatePlayerS = this.updatePlayerS.bind(this);
        this.gameRun = this.gameRun.bind(this);
      }

      componentDidMount(){

          var one = Math.floor(Math.random() * 4) + 1;

          var randomSequence = [ one ];
          
          this.setState({ sequence: randomSequence });
          

      }

      updatePlayerS(val){
          var ss = this.state.playerSequence;
          var numofclicks = this.state.clicks;
          numofclicks+=1;
          ss.push(val);
        this.setState({playerSequence: ss, clicks: numofclicks });
        
        console.log(this.state.clicks, this.state.playerSequence, this.state.sequence)
      }

      gameRun(){

          const { sequence } = this.state;
          const newSSSS = sequence;
          newSSSS.push(Math.floor(Math.random() * 4) + 1);
          this.setState({sequence: newSSSS})
          let { round } = this.state;
          
          var timesx = 1;
          var timesx2 = 0;
          var partialSequence = []
          for(var i = 0; i < round; i++) {

            if( sequence[i] === 1){

                setTimeout(() => {
                this.setState({yellow: true});
                }, 1000 * timesx2)

                setTimeout(() => {
                this.setState({yellow: false});
                }, 1000 * timesx);

            }else if( sequence[i] === 2){

                setTimeout(() => {
                this.setState({green: true});
                }, 1000 * timesx2)

                setTimeout(() => {
                this.setState({green: false});
                }, 1000 * timesx);

            }else if( sequence[i] === 3){

                setTimeout(() => {
                this.setState({red: true});
                }, 1000 * timesx2)

                setTimeout(() => {
                this.setState({red: false});
                }, 1000 * timesx);

            }else if( sequence[i] === 4){

                setTimeout(() => {
                this.setState({blue: true});
                }, 1000 * timesx2)

                setTimeout(() => {
                this.setState({blue: false});
                }, 1000 * timesx);

            }
            timesx++;
            timesx2++;
            partialSequence.push(sequence[i])
        }

        this.setState({round: round+=1});
        console.log(partialSequence);
      }
  
    
    render(){

        if(true){

        }

        return(
            <div className="gamebuttonbody">

                <div>score#{this.state.score}</div>

                <div className="middleButtonRow">

                    {this.state.yellow ? <div>{<button id="yellow2" className="gamebutton" onClick={() => this.updatePlayerS(1)}/>}</div> : <button id="yellow" className="gamebutton" onClick={() => this.updatePlayerS(1)}/>  }

                    {this.state.green ? <div>{<button id="green2" className="gamebutton" onClick={() => this.updatePlayerS(2)}/>}</div> : <button id="green" className="gamebutton" onClick={() => this.updatePlayerS(2)}/>  }

                </div>

                <div className="middleButtonRow">

                    {this.state.red ? <div>{<button id="red2" className="gamebutton" onClick={() => this.updatePlayerS(3)}/>}</div> : <button id="red" className="gamebutton" onClick={() => this.updatePlayerS(3)}/>  }

                    {this.state.blue ? <div>{<button id="blue2" className="gamebutton" onClick={() => this.updatePlayerS(4)}/>}</div> : <button id="blue" className="gamebutton" onClick={() => this.updatePlayerS(4)}/>  }

                </div>

                    <button onClick={() => this.gameRun()}>start</button>
            </div>
        )
    }
}