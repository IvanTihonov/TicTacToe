import PropTypes from 'prop-types';
import { PLAYER_ACTION, PLAER_NAME, STATUS, PLAYER } from '../../constants';
import { InformationLayot } from './information-layout';

export const Information = ({ status, currentPlayer }) => {
    const playerAction = PLAYER_ACTION[status];
    const playerName = PLAER_NAME[currentPlayer];
  
    const information = 
        status === STATUS.DRAW ? 'Ничья' : `${playerAction}: ${playerName}`;

    return <InformationLayot information={information} />;
};

Information.prototype = {
    status: PropTypes.oneOf([STATUS.DRAW, STATUS.TURN, STATUS.WIN]),
    currentPlayer:  PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY]),
};