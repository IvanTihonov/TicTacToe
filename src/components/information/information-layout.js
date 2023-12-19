import PropTypes from 'prop-types';

export const InformationLayot = ({ information }) => <div>{information}</div>;

InformationLayot.propTypes = {
    information: PropTypes.string,
}