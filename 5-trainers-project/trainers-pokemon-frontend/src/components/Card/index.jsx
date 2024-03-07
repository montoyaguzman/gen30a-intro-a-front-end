import './index.css';

function Card({ name, pokemons }) {
    // caso 3 function Card(props) {

    const nameComponent = 'card';

    // caso 1
    // props = { name, image };

    // caso 2
    // const name = props.name;
    // const pokemons = props.pokemons;

    // caso 3
    // const { name, pokemons } = props;

    /** jsx code...*/
    return (
        <>
            <h1>{nameComponent} works!</h1>
            <img src="" alt="aqui va el entrenador.." width="200" height="200" />
            <label>{name}</label>
            {/* <label>{props.name}</label>
            {props.pokemons}
            {props.level}
            {props.ranking} */}
        </>
    );

}

export { Card };