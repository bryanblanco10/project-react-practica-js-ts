import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { Modal } from './components/Modal'
import { TURNS } from './constant'
import { checkWinner, saveLocalStorage, removeLocalStorage } from './utils/board'

//Ajuste mios
//Agregar puntage de cada jugador
//El jugador decide cual signo va a usar
//Quien llega a 10 puntos gana la partida
//Cambiar color azul del select
//Ajustar botones
//Cambiar nombre Triqui
//Hacer animacion de trazar la raya del Triqui

const initialState = localStorage.getItem("board") ? JSON.parse(localStorage.getItem("board")) : Array(9).fill(null);
const turnInitial = localStorage.getItem("turn") ? JSON.parse(localStorage.getItem("turn")) : TURNS.X;
function App() {
  const [board, setBoard] = useState(initialState);
  const [turn, setTurn] = useState(turnInitial);
  //null no hay ganador, false es empate
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return
    
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    const newBoard = [...board];
    newBoard[index] = turn;

    setBoard(newBoard);
    setTurn(newTurn);
    saveLocalStorage(newBoard, newTurn);
    const newWinner = checkWinner(newBoard);

    if (newWinner) {
      confetti();
      removeLocalStorage();
      return setWinner(newWinner);
    }

    if (newBoard.every((item) => item !== null)) {
      removeLocalStorage();
      return setWinner(false);
    }
  }

  const resetGame = () => {
    setBoard(initialState);
    setWinner(null);
    setTurn(TURNS.X);
    removeLocalStorage();
  }

  return (
    <>
      <main className='board'>
        <h1>Tic Tac Toe</h1>
        <button onClick={resetGame}>Reset del juego</button>
        <section className='game'>
          {board.map((item, index) => {
            return (
              <Square key={index} updateBoard={updateBoard} index={index}>
                { item }
              </Square>
            )
          })}
        </section>
        <section className='turn'>
          <Square isSelected={turn === TURNS.X}>{ TURNS.X }</Square>
          <Square isSelected={turn === TURNS.O}>{ TURNS.O }</Square>
        </section>
        {
          winner !== null && (
            <Modal
              winner={winner}
              resetGame={resetGame}
            />
          )
        }
      </main>
    </>
  )
}

export default App
