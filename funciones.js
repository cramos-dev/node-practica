const clientes = require("./clientes");

function buscarCliente(id) {
    const cliente = clientes.find(cliente => cliente.id === id);
    if (!cliente) {
        return `Cliente con id ${id} no encontrado.`;
    }
    return cliente;
}

function obtenerClientesActivos() {
    return clientes.filter(cliente => cliente.activo);
}

function obtenerNombresClientes(){
    return clientes.map(cliente => cliente.nombre);
}

module.exports = {
    buscarCliente,
    obtenerClientesActivos,
    obtenerNombresClientes
};