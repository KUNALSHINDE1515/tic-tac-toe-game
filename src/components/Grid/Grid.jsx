import { useState } from "react";
import Card from "../Card/Card";
import './Grid.css';
import isWinner from "../../helper/checkWinner";

function Grid({ numberOfCards}){
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const[turn,setTurn] = useState(true);
    const[winner, setWinner] = useState(null);

    console.log(board)
    function play(index){

        console.log("called")
        let  updatedBoard = [...board]

        if(turn == true) {
            updatedBoard[index] = "o";
        }
        else {
            updatedBoard[index] = "X";
        }

       const win = isWinner(updatedBoard,turn ? "o" : "x");
       if(win){
         setWinner(win);

       }
        setBoard([...updatedBoard]);
        setTurn(!turn);
    }
    function reSet(){
        console.log("kunal");
        setTurn(true)
        winner(null)
        setBoard(Array(numberOfCards).fill(""))

    }
   return (
    <div className="grid-wrapper">

        {
            winner &&(
                <>
              <h1 className="turn-highlight">winner is {winner}</h1>
              <button className="reset" onClick={reSet}> Reset Game</button>
              </>
            )
        }

        <h1 className="turn-highlight">Current turn :{(turn) ? 'o' : 'X'}</h1>

<     div className="grid">
        {board.map((el, idx) => <Card key={idx} onPlay={play} player={el} index={idx} />)}
       </div>

    </div>
     
   );
}

export default Grid;