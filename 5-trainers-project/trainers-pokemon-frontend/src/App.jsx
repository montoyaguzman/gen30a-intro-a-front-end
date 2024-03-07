import React from "react";
import './App.css';
import { Menu } from './components/Menu/';
import { SearchBar } from './components/SearchBar';
import { Card } from './components/Card';

function App() {

  const trainers = [
    { name: 'ash ketchum', img: '' },
    { name: 'misty', img: '' },
    { name: 'brock', img: '' },
  ];

  return (
    <React.Fragment>
      {/* <> */}
      <h1>app works!</h1>
      <Menu />
      <SearchBar />
      {/* <Card name={trainers[0].name} image={trainers[0].img} />
      <Card name={trainers[1].name} image={trainers[1].img} /> */}

      {/* array list de webcomponents */}
      {
        trainers.map((element, index) => {
          return (<Card name={element.name} image={element.img} />)
        })
      }

      {/* <ListCard>
        <Card/>
      </ListCard> */}
      {/*</> */}
    </React.Fragment>
  );
}

export { App };
