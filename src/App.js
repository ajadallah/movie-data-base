import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    input: 'Hello'
  }

  updateInput = (event) => {
    this.setState({
      input: event.target.value
    });
    console.log(this.state.input)
  }

  submit = () => {
    console.log(this.text.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Welcome text="Welcome to Using Props u n00b" />
          </a>
          <span>
            <input type='text' onChange={this.updateInput} value={this.state.input} />
            <input type='text' ref={(input) => this.text = input} />
            <button onClick={this.submit}>Show Value</button>
          </span>
        </header>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text } = this.props;
    return (
      <h1 className='App-title'>{text}</h1>
    );
  }
}

export default App;
