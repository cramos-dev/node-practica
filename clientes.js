const clientes = [
    {
        id: 1,
        nombre: "Juan Pérez",
        telefono: "8112345678",
        activo: true
    },
    {
        id: 2,
        nombre: "Ana López",
        telefono: "8187654321",
        activo: false
    },
    {
        id: 3,
        nombre: "Carlos García",
        telefono: "8123456789",
        activo: true
    }
];

console.log(clientes.find(cliente => cliente.id === 2));
console.log(clientes.filter(cliente => cliente.activo));

function buscarCliente(id) {
    return clientes.find(cliente => cliente.id === id);
}

console.log(buscarCliente(1));