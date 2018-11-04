import React, { Component } from 'react';
import lottery from './lottery';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';

class App extends Component {

  state = {
    manager: '',
  };

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    this.setState({
      manager,
    });

    console.log(manager);
  }

  onSubmit = async (e) => {
    e.preventDefault();

    const accounts = await web3.eth.getAccounts();

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei('.01', 'ether')
    });

  };

  render() {
    return (
      <div className="App">
        <h2>Lottery Contract</h2>
        <h5>Contract Manager: {this.state.manager}</h5>
      </div>
    );
  }
}

export default App;
