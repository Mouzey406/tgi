import React from 'react';
import  ReactDOM  from 'react-dom/client';
import "./index.css"

function Square(props){
      return (
        <button className="square" onClick={props.onClick}>
          {props.value}
        </button>
      ); 
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      console.log(this.props.squares)
      return <Square onClick={()=> this.props.onClick(i)} value={this.props.squares[i]} />;
    }
    
    render() {
      let starting = 0;
      return (
        <div>
          {
            [0, 1, 2].map((a, b)=>{
              return (
                <div className='board-row' key={b}>
                  {
                  [0, 1, 2].map((c, d)=>{
                    this.renderSquare(starting)
                    starting++;
                  })
                  }
                </div>
              )
            })
          }
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  


class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date()
    }
  }
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearTimeout(this.timer)
  }
  tick() {
    this.setState({time: new Date()})
  }
  render(){
      return(
        <div>Time now is: {this.state.time.toLocaleTimeString()}</div>
      )
    }
}

  class Game extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        history: [{
          squares: Array(9).fill(null)
        }],
        historyPoint: 0,
        XisNext: true,
      selected: null,
      reversed: false,
      }
    }
    handleClick(f) {
      const history = this.state.history.slice(0, this.state.historyPoint + 1);
      console.log(history);
      const squares = history.at(-1).squares.slice();
      console.log(squares);
      if(squares[f] === 'X' || squares[f] === 'O' || calculateWinner(squares)) return;
      squares[f] = this.state.XisNext ? 'X' : "O" ;
      this.setState({history: history.concat([{squares: squares}]), historyPoint: history.length, XisNext: !this.state.XisNext}) 
    }
    jumpTo(step) {
      console.log(this.state.selected);
      let toRemove = document.querySelector(`[data-step="step${this.state.selected}"]`)
        if(this.state.selected !== null && toRemove !==null) toRemove.classList.remove("bold");
        this.state.selected = step;
        document.querySelector(`[data-step="step${this.state.selected}"]`).classList.add("bold");
        this.setState({
          historyPoint: step,
          xIsNext: (step % 2) === 0,
        });
      }
      reverseArr() {
        this.setState({reversed: !this.state.reversed})
      }
    render() {
      const history = this.state.history;
      const current = history.at(this.state.historyPoint);
      const winner = calculateWinner(current.squares);
      const minus = this.state.reversed ? history.length - 1 : 0; 
      console.log(minus, "minus ");     
      const moves = history.map((a, b)=> {
        let wording = !(minus - b) ? "Started game" : `Go to move #${minus - b}`
        return (
          <li key={minus-b}><button data-step={`step${minus-b}`} onClick={()=>this.jumpTo(minus-b)}>{wording}</button></li>
        )
      }
      
      )
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.XisNext ? 'X' : 'O');
      }
      return (
        <div className="game">
          <div className="game-board">
            <Board onClick={(i)=>this.handleClick(i)} squares={current.squares} />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <div><button onClick={()=>this.reverseArr()} /></div>
            <ol>{moves}</ol>
            <div>Clock: <Clock /></div>
          </div>
        </div>
      );
    }

  }
  

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Clock />)




