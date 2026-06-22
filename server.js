const express = require('express');
const app = express();

const clientes = require('./clientes');
const {
    buscarCliente
} = require('./funciones');

app.get('/', (req, res) => {
    res.send('API de clientes funcionando');
});

app.get('/clientes', (req, res) => {
    res.json(clientes);
});

app.get('/clientes/:id', (req, res) => {
    const id = Number(req.params.id);

    const cliente = buscarCliente(id);

    res.json(cliente);
});

app.listen(3000, () => {
    console.log('Servidor ejecutándose en el puerto 3000');
});