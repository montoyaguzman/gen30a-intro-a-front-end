import './index.css';
import { SearchBar } from '../../components/SearchBar/';
import { Card } from '../../components/Card/';

function Home() {

    const trainers = [
        {
            name: 'ash ketchum',
            img: '',
            region: 'kanto',
            rank: 1,
            team: [
                { pokemon: 'Pikachu', level: 50 },
                { pokemon: 'Greninja', level: 40 }
            ]
        },
        {
            name: 'misty',
            img: '',
            region: 'kanto',
            rank: 49,
            team: [
                { pokemon: 'Gyarados', level: 55 }
            ]
        },
        {
            name: 'brock',
            img: '',
            region: 'kanto',
            rank: 45,
            team: [
                { pokemon: 'Geodude', level: 10 },
                { pokemon: 'Onyx', level: 30 }
            ]
        },
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
            return (<Card key={index} name={element.name} image={element.img} />)
        })
    }

    const noData = () => {
        return (<h1>no hay entrenador disponibles...</h1>)
    }

    return (
        <>
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

            {/* <Footer>
            <LinkTrainer/>
            <LinkTrainer/>
            </Footer> 
            children
            */}
        </>
    );
}

export { Home };