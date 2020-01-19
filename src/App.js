import React, { Component } from 'react';
import './App.css';
import UserInput from './component/UserInput/UserInput';
import UserOutput from './component/UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'avi106'
  }

  userNameHandler = (e) => {
    this.setState({
      username: e.target.value
    });
  }
  render () {
    const style = {
    backgroundColor: 'white',
    fontSize:'bold',
    border: '1px solid black',
    padding: '8px'
    }
    return (
      <div className="App">
        <UserInput 
          username={this.state.username}
          changed={this.userNameHandler} />
          <button style={style}>Submit</button>
        <UserOutput username={this.state.username} />
      </div>
    )
  }
}

export default App;
