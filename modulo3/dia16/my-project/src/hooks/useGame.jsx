import { useState } from 'react'
import { board } from '../utils/constants'

export function useGame() {
    const [game, setGame] = useState(board)
    const [turn, setTurn] = useState(Math.floor(Math.random() * (2 - 1 + 1) + 1))

    const handleMove= (id) => {
        const newBoard = [...game];

        if(!newBoard[id].player){
            newBoard[id].player = turn;
            setGame (newBoard);
            changeTurn()
        }
        
    }

    function changeTurn (){
        const newTurn = turn === 1 ? 2: 1 ;
        setTurn(newTurn);
    }

    return {
        game,
        handleMove,
        turn
    }
}
