const URL = 'http://localhost:3000/trainers';
// CONTRATO 
// const URL = 'http://localhost:3000/trainers';
// const URL = 'http://localhost:3000/trainers?name={yourName}isChampion={yourValue}';

const getTrainers = async (params) => {
    let newUrl = '';
    if (params && (params.name || params.hasThropies)) {
        newUrl = `${URL}?name=${params.name}&isChampion=${params.hasThropies}`;
    } else {
        newUrl = URL;
    }
    const request = await fetch(newUrl);
    const response = await request.json();
    return response;
};

export { getTrainers };