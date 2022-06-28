const express = require ('express');

// Inicialización

const app = express();

// Settings

app.set('port', process.env.PORT || 3000);

// Server

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});