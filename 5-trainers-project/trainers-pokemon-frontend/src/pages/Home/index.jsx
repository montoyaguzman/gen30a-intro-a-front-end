import './index.css';
import { SearchBar } from '../../components/SearchBar/';
import { ListCard } from '../../components/ListCard/';
import { Card } from '../../components/Card/';
import { getTrainers } from '../../services/trainers';
import { useEffect, useState } from 'react';

function Home() {

    const [trainers, setTrainers] = useState();

    // setTrainers(getTrainers()); // no work

    const getData = async () => {
        const newTrainers = await getTrainers();
        setTrainers(newTrainers);
    }

    // 1. El callback se ejecuta solo en el primer render (didMount).
    useEffect(() => {
        console.log('Ejecutando el []')
        getData();
    }, []);

    // 2. El callback se ejecuta la primera vez y cada que cambie algún valor dentro de las dependencias.
    // useEffect(() => {
    //     console.log('Ejecutando el trainers')
    // }, [trainers]);

    // 3. El callback se ejecuta en cada renderizado (mount, didMount).
    useEffect(() => {
        console.log('Ejecutando el -')
    });

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
            return (
                <Card
                    key={index}
                    name={element.name}
                    image={element.img}
                    region={element.region.name}
                    rank={element.rank}
                    team={element.team}
                />
            )
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

            {/* {
                trainers.length > 0 ? listCard() : noData()
            } */}

            <ListCard>
                {
                    trainers ? trainers.map((element, index) => {
                        return (
                            <Card
                                key={index}
                                name={element.name}
                                image={element.imgs.card}
                                region={element.region.name}
                                rank={element.rank}
                                team={element.team}
                            />
                        );
                    })
                        : noData()
                }
            </ListCard>


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