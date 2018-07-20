import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for reset button.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
 */
const NewWordButton = props => {
  if (props.display) {
    return (
      <button
        data-test="new-word-button-component"
        className="btn btn-primary spacer-bottom"
        onClick={props.resetAction}
      >
        New word
      </button>
    );
  } else {
    return <div data-test="new-word-button-component" />;
  }
};

NewWordButton.propTypes = {
  display: PropTypes.bool.isRequired,
  resetAction: PropTypes.func
};

export default NewWordButton;
