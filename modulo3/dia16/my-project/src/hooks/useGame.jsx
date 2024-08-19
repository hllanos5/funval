import { useState } from 'react'
import { board } from '../utils/constants'

export function useGame() {
    const [game, setGame] = useState(board)
    const [turn, setTurn] = useState(Math.floor(Math.random() * (2 - 1 + 1) + 1));
    const [numJugada, setNumJugada] = useState(0);

    const [jugadaPlayer1, setJugadaPlayer1] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]);
    const [jugadaPlayer2, setJugadaPlayer2] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]);
    const [winner, setWinner] = useState([
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],//Diagonal
        [2, 4, 6],//Diagonal
      ]);

    const handleMove= (id) => {
        const newBoard = [...game];
        setNumJugada(numJugada+1);

        if(!newBoard[id].player){
            newBoard[id].player = turn;
            setGame (newBoard);
            changeTurn()

           if(turn === 1) { //Jugador 1
            guardarJugaba(jugadaPlayer1, setJugadaPlayer1, id);
            
            if(evaluarGanador(jugadaPlayer1)){
                console.log("jugador 1 winner");
            }
           }
           if(turn === 2){  //jugador 2
            guardarJugaba(jugadaPlayer2, setJugadaPlayer2, id)
            if(evaluarGanador(jugadaPlayer2)){
                console.log("jugador 2 winner");
            }
           }
           console.log("Jugador1: ",jugadaPlayer1);
           console.log("Jugador2: ",jugadaPlayer2);
           
        }
        
    }

    function changeTurn (){
        const newTurn = turn === 1 ? 2: 1 ;
        setTurn(newTurn);
    }

    function guardarJugaba(jugador, handleSet,  posicion){
        console.log(posicion);
        if(posicion<=2){
            handleSet([...jugador, jugador[0][posicion] = posicion]);
        }
        else if(posicion<=5){
            handleSet([...jugador, jugador[1][posicion-3] = posicion]);
        }
        else{
            handleSet([...jugador, jugador[2][posicion-6] = posicion]);
        }
    }

    function evaluarGanador(jugador){
        
        console.log(winner);
        winner.forEach((obj1, index1) => {
            jugador.forEach((obj2, index2) =>{
                if(obj1 === obj2){
                    return true;
                }
            })
        });
        
    }

    return {
        game,
        handleMove,
        turn
    }
}
