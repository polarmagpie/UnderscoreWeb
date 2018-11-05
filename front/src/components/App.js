import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'
import Head from './Head';
import Body from './Body';
import Foot from './Foot';

class App extends Component {

  state = {
    currentPage: 'main',
  }

  //특정 이벤트 시 현재 보고 있는 페이지 전환
  handleChangePage = (page) => {
    this.setState({currentPage: page});
  }

  render() {
    return (
      <div className="App">
        <Head onButtonClick = {(e) => this.handleChangePage(e)}/>
        <Body />
        <Foot />
      </div>
    );
  }
}

export default App;
