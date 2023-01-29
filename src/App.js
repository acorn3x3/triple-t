import './App.css';

import Board from './components/Board';
// import { useGameContext } from 'react';
import { useGameContext } from './context/GameContext';

function App() {
  const { board, setBoard } = useGameContext();
  const onSquareClick = (squareNum) => {
    const content = board[squareNum];
    const newContent = content === '' ? 'x' : content === 'x' ? 'o' : '';
    const newBoard = board.slice();
    newBoard[squareNum] = newContent;
    setBoard(newBoard);
  };

  return <Board onClick={onSquareClick} />;
}

export default App;
