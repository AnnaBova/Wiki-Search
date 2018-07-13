import React, { Component } from 'react';
import styled, {injectGlobal} from 'styled-components';
import SearchPane from './SearchPane';
import ResultPane from './ResultPane';

injectGlobal`
  body {
    margin: 0;
    width: 100%;
    height: 100%;
    background-color: #092B40;
    font-family: "Lucida Grande","Lucida Sans Unicode", Tahoma, Sans-Serif;
  }
`;

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  color: #fff;
  margin: 0;
  padding: 0;
  overflow: auto;
  padding-bottom: 50px;
`;

class App extends Component {
  render() {

    return (
      <AppWrapper>
        <SearchPane />
        <ResultPane />
      </AppWrapper>
    );
  }
}

export default App;
