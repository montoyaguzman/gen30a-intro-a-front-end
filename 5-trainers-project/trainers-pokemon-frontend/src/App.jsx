import React from "react";
import './App.css';
import { Menu } from './components/Menu/';
import { SearchBar } from './components/SearchBar';

function App() {
  return (
    <React.Fragment>
      {/* <> */}
      <h1>app works!</h1>
      <Menu />
      <SearchBar />
      {/* <ListCard>
        <Card/>
      </ListCard> */}
      {/*</> */}
    </React.Fragment>
  );
}

export { App };
