import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions';

export class UnconnectedInput extends Component {
  inputBox = React.createRef();
  submitGuessedWord = event => {
    // don't submit form
    event.preventDefault();
    const guessedWord = this.inputBox.current.value;
    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
    }
  };
  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          ref={this.inputBox}
          className="mb-2 mx-sm-3"
          id="word-guess"
          type="text"
          placeholder="enter guess"
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={this.submitGuessedWord}
          type="submit"
        >
          Submit
        </button>
      </form>
    );
    return <div data-test="input-component">{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => ({ success });

const mapDispatchToProps = { guessWord };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedInput);
