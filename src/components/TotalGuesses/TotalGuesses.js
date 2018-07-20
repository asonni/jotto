import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for count of total guesses.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component.
 */
const TotalGuesses = ({ guessCount }) => {
  return (
    <h4 data-test="total-guesses-component">Total Guesses: {guessCount}</h4>
  );
};

TotalGuesses.propTypes = {
  guessCount: PropTypes.number.isRequired
};

export default TotalGuesses;
