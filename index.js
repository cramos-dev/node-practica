const clientes = require('./clientes');
const {
    buscarCliente,
    obtenerClientesActivos,
    obtenerNombresClientes
} = require('./funciones');

console.log(clientes);
console.log(buscarCliente(2));
console.log(obtenerClientesActivos(clientes));
console.log(obtenerNombresClientes(clientes));

console.log(buscarCliente(2));
console.log(buscarCliente(4));