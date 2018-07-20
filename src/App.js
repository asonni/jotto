import React, { Component } from 'react';
import { connect } from 'react-redux';

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';
import { getSecretWord } from './actions';
import './App.css';

class App extends Component {
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
)(App);
