import React from "react";
import './App.css';
import { Routes } from './constants/Routes';
import { Menu } from './components/Menu/';

function App() {



  return (
    <React.Fragment>

      <Menu />
      <Routes />

    </React.Fragment>
  );
}

export { App };
