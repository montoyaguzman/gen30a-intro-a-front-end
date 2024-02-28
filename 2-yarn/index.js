const express = require('express');
const colors = require('colors');
const app = express();
const port = 3000;


// songs 
const songs = [
    { name: 'Kilometros', artist: 'Caligaris' },
    { name: 'Umbrella', artist: 'Rihanna' },
    { name: 'Back in black', artist: 'AC/DC' },
    { name: 'Back in black 2', artist: 'AC/DC' },
];

// endpoints
app.get('/', (resquest, response) => {
    response.json(songs);
});

// server
app.listen(port, () => {
    console.log('Servidor express corriendo...'.green);
});
