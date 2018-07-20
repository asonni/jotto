import React, { Component } from 'react';
import { connect } from 'react-redux';

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';
import { getSecretWord } from './actions';
import './App.css';

export class UnconnectedApp extends Component {
  /**
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    // get the secret word
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = ({ success, guessedWords, secretWord }) => ({
  success,
  guessedWords,
  secretWord
});

const mapDispatchToProps = { getSecretWord };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedApp);
