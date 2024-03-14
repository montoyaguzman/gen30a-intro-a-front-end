import './index.css';
import { SearchBar } from '../../components/SearchBar/';
import { ListCard } from '../../components/ListCard/';
import { Card } from '../../components/Card/';
import { getTrainers } from '../../services/trainers';
import { useEffect, useState } from 'react';

function Home() {

    const [trainers, setTrainers] = useState([]);
    const [counter, setCounter] = useState(0);
    const [params, setParams] = useState({});

    // setTrainers(getTrainers()); // no work

    const getData = async (params) => {
        const newTrainers = await getTrainers(params);
        setTrainers(newTrainers);
    }

    // 1. El useEffect no tiene condiciones:
    // ===> El callback se ejecuta en cada renderizado (mount, didMount).
    useEffect(() => {
        console.log('Ejecutando el useEffect SIN CONDICIONES');
    });

    // 2. El useEffect tiene como condicion un []
    // ===> El callback se ejecuta solo en el primer render (didMount).
    useEffect(() => {
        console.log('Ejecutando el useEffect cuando [] (la primera vez)')
        getData();
    }, []);

    // 3. El useEffect se ejecuta de acuerdo a sus condiciones
    // ===> El callback se ejecuta la primera vez y cada que cambie algún valor dentro de las dependencias.
    useEffect(() => {
        console.log('Ejecutando el useEffect cuando cambia counter')
    }, [counter]);

    // IF CASO 1
    // let cardContent = null;
    // if (trainers.length > 0) {
    //   cardContent = trainers.map((element, index) => {
    //     return (<Card name={element.name} image={element.img} />)
    //   })
    // } else {
    //   cardContent = <h1>no hay entrenador disponibles...</h1>
    // }

    useEffect(() => {
        getData(params);
    }, [params]);

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


    const handleNumber = () => {
        // counter = counter + 1; // error
        setCounter(counter + 1)
    }

    const handleParams = (params) => {
        setParams(params);
    }

    return (
        <>
            <SearchBar handleParams={handleParams} />
            {/* <Card name={trainers[0].name} image={trainers[0].img} />
            <Card name={trainers[1].name} image={trainers[1].img} /> */}

            {/* array list de webcomponents */}
            { /* IF CASO 1*/}
            {/* {cardContent} */}

            {/* {
                trainers.length > 0 ? listCard() : noData()
            } */}

            <button onClick={handleNumber}>Incrementar</button>
            <span>El numero es: {counter}</span>

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