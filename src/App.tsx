import React from 'react';
import styles from './App.module.scss';
import Cell from './components/flexLayout/Cell/Cell';
import Column from './components/flexLayout/Column/Column';
import FlexContainer from './components/flexLayout/Container/Container';

// Server
// Config
// Layout flex

// console.log('styles', styles);

function App() {
  return <FlexContainer>
    
    {/* Side */}
    <Column size=".25" style={{backgroundColor: 'red'}}>
      <Cell>Side</Cell>
    </Column>

    {/* Main */}
    <Column style={{backgroundColor: 'green'}}>
      <Cell>Main</Cell>
    </Column>
  </FlexContainer>
  // return ;
}

export default App;

// cell - row | col
