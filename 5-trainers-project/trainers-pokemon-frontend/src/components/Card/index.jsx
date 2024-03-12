import './index.css';

import defaultPhoto from '../../assets/img/default-photo.jpeg';

function Card({ image, region, rank, name, team }) {

    console.log(image, region, rank, name, team)

    // caso 3 function Card(props) {

    // caso 1
    // props = { name, image };

    // caso 2
    // const name = props.name;
    // const pokemons = props.pokemons;

    // caso 3
    // const { name, pokemons } = props;

    const imgStyles = {
        width: '100%',
        height: '100%',
    };

    /** jsx code...*/
    return (
        <>
            <div className='container-card'>

                <div className="image-trainer">
                    <img src={image || defaultPhoto} alt="imagen del entrenador" style={imgStyles} />
                </div>
                <div className="card-content">
                    <div className="stats">
                        <p className="region-tag">{region}</p>
                        <div className="rank">
                            <p className="rank-label">rango</p>
                            <p className="rank-tag">{rank}</p>
                        </div>
                    </div>
                    <h2 className="title">{name}</h2>

                    <div className="team">
                        <h3 className="team-label">Equipo</h3>
                        <div className="team-members">

                            {team.map((element, index) => {
                                return (
                                    <div className="pokemon-tag" key={index}>
                                        <p className="pokemon-tag--name">{element.pokemon}</p>
                                        <p className="pokemon-tag--level">Nivel: {element.level}</p>
                                    </div>
                                );
                            })}

                        </div>
                    </div>

                    <a href="#" className="button-default">más información</a>

                </div>
            </div>
        </>
    );

}

export { Card };