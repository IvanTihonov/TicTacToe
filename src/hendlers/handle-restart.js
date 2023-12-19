import { STATUS, PLAYER } from "../constants";
import { createEmptyField } from "../utils/create-empty-field";

export const handleRestart = ({ setStatus, setCurrentPlayer, setField }) => {
    setStatus(STATUS.TURN);
    setCurrentPlayer(PLAYER.CROSS);
    setField(createEmptyField());
  };