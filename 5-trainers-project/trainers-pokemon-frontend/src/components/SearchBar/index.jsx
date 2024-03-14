import './index.css';

// import TuneIcon from '@mui/icons-material/Tune';

function SearchBar({ handleParams }) {

    const handleForm = (event) => {
        event.preventDefault();
        // const name = document.querySelector('#trainer-name');
        // const isChampion = document.querySelector('#isChampion');

        const formElement = event.target;
        const formData = new FormData(formElement);

        const trainerName = formData.get('trainer-name');
        const isChampion = formData.get('isChampion');

        const params = {
            name: trainerName,
            hasThropies: isChampion,
        }

        handleParams(params);

    }

    return (
        <>
            <div className='container-form'>
                <form id='search-form' className='form-element' onSubmit={handleForm}>

                    <h2>Nombre del entrenador: </h2>
                    <input type="text" id="trainer-name" name="trainer-name" placeholder='Nombre entrenador...' />
                    <div className='radio-container'>
                        {/* <TuneIcon /> */}
                        ¿Sólo campeones?:
                        <label htmlFor="true">Si</label>
                        <input type="radio" name="isChampion" id="isChampion" value="true" />

                        <label htmlFor="false">No</label>
                        <input type="radio" name="isChampion" id="isChampion" value="false" />
                    </div>

                    <input type="submit" className="button-default" value="Buscar" />

                </form>
            </div>
        </>
    );

}

export { SearchBar };