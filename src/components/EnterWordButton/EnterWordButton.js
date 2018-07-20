import React from 'react';
import PropTypes from 'prop-types';

const EnterWordButton = props => {
  if (props.display) {
    return (
      <button
        data-test="enter-word-button-component"
        className="btn btn-primary spacer-bottom"
        onClick={props.buttonAction}
      >
        Enter your own secret word
      </button>
    );
  } else {
    return <div data-test="enter-word-button-component" />;
  }
};

EnterWordButton.propTypes = {
  display: PropTypes.bool.isRequired,
  buttonAction: PropTypes.func
};

export default EnterWordButton;
