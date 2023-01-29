import { useGameContext } from '../context/GameContext';
import React from 'react';
import './Board.css';

export default function Board({ onClick }) {
  const { board } = useGameContext();
  const renderBoard = board.map((square, i) => (
    <div onClick={() => onClick(i)} className="square" key={i}>
      {square}
    </div>
  ));
  return <div className="GameBoard">{renderBoard}</div>;
}

/// board.js will render 9 boxes
