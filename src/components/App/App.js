import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import TotalGuesses from '../TotalGuesses/TotalGuesses';
import NewWordButton from '../NewWordButton/NewWordButton';
import SecretWordReveal from '../SecretWordReveal/SecretWordReveal';
import EnterWordButton from '../EnterWordButton/EnterWordButton';
import EnterWordForm from '../EnterWordForm/EnterWordForm';
import ServerError from '../ServerError/ServerError';
import GuessedWords from '../GuessedWords/GuessedWords';
import Congrats from '../Congrats/Congrats';
import Input from '../Input/Input';
import {
  getSecretWord,
  resetGame,
  setUserSecretWord,
  setUserEntering
} from '../../actions';

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
    let contents;
    if (this.props.serverError) {
      contents = <ServerError />;
    } else if (this.props.userEnter === 'inProgress') {
      contents = <EnterWordForm formAction={this.props.setUserSecretWord} />;
    } else {
      contents = (
        <div>
          <Congrats success={this.props.success} />
          <SecretWordReveal
            display={Boolean(this.props.gaveUp)}
            secretWord={this.props.secretWord}
          />
          <NewWordButton
            display={Boolean(this.props.success) || Boolean(this.props.gaveUp)}
            resetAction={this.props.resetGame}
          />
          <Input />
          <GuessedWords guessedWords={this.props.guessedWords} />
          <TotalGuesses guessCount={this.props.guessedWords.length} />
          <EnterWordButton
            display={this.props.guessedWords.length === 0}
            buttonAction={this.props.setUserEntering}
          />
        </div>
      );
    }
    return (
      <div className="container">
        <h1>Jotto</h1>
        {contents}
      </div>
    );
  }
}

const mapStateToProps = ({
  success,
  guessedWords,
  secretWord,
  gaveUp,
  userEnter,
  serverError
}) => ({ success, guessedWords, secretWord, gaveUp, userEnter, serverError });

const mapDispatchToProps = {
  getSecretWord,
  resetGame,
  setUserSecretWord,
  setUserEntering
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedApp);
