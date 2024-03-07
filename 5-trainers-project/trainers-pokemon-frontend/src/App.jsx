import React from "react";
import './App.css';
import { Menu } from './components/Menu/';
import { SearchBar } from './components/SearchBar';
import { Card } from './components/Card';

function App() {

  const trainers = [

  ];

  // IF CASO 1
  // let cardContent = null;
  // if (trainers.length > 0) {
  //   cardContent = trainers.map((element, index) => {
  //     return (<Card name={element.name} image={element.img} />)
  //   })
  // } else {
  //   cardContent = <h1>no hay entrenador disponibles...</h1>
  // }

  const listCard = () => {
    return trainers.map((element, index) => {
      return (<Card name={element.name} image={element.img} />)
    })
  }

  const noData = () => {
    return (<h1>no hay entrenador disponibles...</h1>)
  }

  return (
    <React.Fragment>
      {/* <> */}
      <h1>app works!</h1>
      <Menu />
      <SearchBar />
      {/* <Card name={trainers[0].name} image={trainers[0].img} />
      <Card name={trainers[1].name} image={trainers[1].img} /> */}

      {/* array list de webcomponents */}
      { /* IF CASO 1*/}
      {/* {cardContent} */}

      {
        trainers.length > 0 ? listCard() : noData()
      }

      {/* <ListCard>
        <Card/>
      </ListCard> */}
      {/*</> */}
    </React.Fragment>
  );
}

export { App };
