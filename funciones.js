const clientes = [
    {
        id: 1,
        nombre: "Juan Pérez",
        activo: true
    },
    {
        id: 2,
        nombre: "Ana López",
        activo: false
    },
    {
        id: 3,
        nombre: "Carlos García",
        activo: true
    }
];

function buscarCliente(id) {
    return clientes.find(cliente => cliente.id === id);
}

const resultado = buscarCliente(2);
console.log(resultado);

function obtenerClientesActivos() {
    return clientes.filter(cliente => cliente.activo);
}

console.log(obtenerClientesActivos());

function contarClientesActivos() {
    return clientes.filter(cliente => cliente.activo).length;
}

console.log(contarClientesActivos());