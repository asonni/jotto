import React from 'react';

/**
 * Functional react component for congratulatory message.
 * @function
 * @params {object} props -React props
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false)
 */

export default props => {
  return (
    <div>
      {props.success ? (
        <div data-test="congrats-component" className="alert alert-success">
          <span data-test="congrats-message">
            Congratulations! You guessed the word!
          </span>
        </div>
      ) : (
        <div data-test="congrats-component" />
      )}
    </div>
  );
};
