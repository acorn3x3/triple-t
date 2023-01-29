import { createContext, useContext, useState } from 'react';
const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [currentPlayer, setCurrentPlayer] = useState();
  const [active, setActive] = useState();
  const [gameMessage, setGameMessage] = useState();

  return (
    <GameContext.Provider
      value={{
        currentPlayer,
        setCurrentPlayer,
        active,
        setActive,
        gameMessage,
        setGameMessage,
        board,
        setBoard,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
const useGameContext = () => {
  const context = useContext(GameContext);
  return context;
};
export { useGameContext, GameProvider };
