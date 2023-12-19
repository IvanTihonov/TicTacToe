import { useState } from 'react';
import { GameLayout } from './game-layout';
import { handleCellClick } from './hendlers/handle-cell-click';
import { handleRestart } from './hendlers/handle-restart';
import { createEmptyField } from './utils';

import { STATUS, PLAYER } from './constants';

export const Game = () => {
  const [status, setStatus] = useState(STATUS.TURN);
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS); 
  const [field, setField] = useState(createEmptyField());
 
const state = { status, setStatus, currentPlayer, setCurrentPlayer, field, setField };

    return (
    <GameLayout 
      status={status} 
      currentPlayer={currentPlayer} 
      field={field} 
      handleCellClick={(cellindex) => handleCellClick(state, cellindex)}
      handleRestart={() => handleRestart(state)}
    />
  );
};
