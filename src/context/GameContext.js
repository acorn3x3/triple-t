import { createContext, useContext, useState } from 'react';
const GameContext = createContext();

import initialSpaces from '../spaces-data';

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(initialSpaces);
  //const [space, setSpace] = useState('');
  //const [player, setPlayer] = useState(initialBoards);
  //const [win, setWin] = useState(initialBoards);
  //const [reset, setReset] = useState(initialBoards);
  //const [board, setBoard] = useState(initialBoards);
  //const [gameMessage, setGameMessage] = useState('your turn X')
  //const [isActive, setIsActive] = useState(true);

  return <GameContext.Provider value={{ board, setBoard }}>{children}</GameContext.Provider>;
};
const useGameContext = () => {
  const context = useContext(GameContext);
  return context;
};
export { useGameContext, GameProvider };
