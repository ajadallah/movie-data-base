import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  /* 
    Constructor is the first thing called when component is created
    Anytime you want to do something with props or otherwise before 
    component renders */
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  /* 
    Fires just before component renders
    Use when you want to change state without triggering a second render
    Almost always do these things in constructor */
  UNSAFE_componentWillMount() {
    console.log('will mount');
  }

  /*   
    We get access to this immediately after component renders
    For things that need to happen after component renders like api calls */
  componentDidMount() {
    console.log('did mount');
  }

  state = {
    toggle: true
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
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
          {this.state.toggle && <p>This should Show and Hide</p>}
          <button onClick={this.toggle}>Show / Hide</button>
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
