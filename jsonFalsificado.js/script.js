const inserts = [
    {
    tabla: 'usuarios',
    datos: [
        { id: 1, nombre: 'Till Lindemann', email: 'vorlindemann@gmail.com', edad: 61 },
        { id: 2, nombre: 'Christian Lorenz', email: 'flekken@gmail.com', edad: 57 },
        { id: 3, nombre: 'Richard Z. Kruspe', email: 'zkruspe67@hotmail.com', edad: 57 },
        { id: 4, nombre: 'Paul Landers', email: 'landerslve8@gmail.com', edad: 59 },
        { id: 5, nombre: 'Christoph Schneider', email: 'drummer94@gmail.com', edad: 58 }
    ]
    },
    {
    tabla: 'productos',
    datos: [
        { id: 1, nombre: 'Microfono', precio: 1600, stock: 8 },
        { id: 2, nombre: 'Bateria', precio: 800, stock: 11 },
        { id: 3, nombre: 'Bajo', precio: 500, stock: 7 },
        { id: 4, nombre: 'Guitarra', precio: 200, stock: 14 },
        { id: 5, nombre: 'Teclado', precio: 150, stock: 16 }
    ]
    },
    {
    tabla: 'pedidos',
    datos: [
        { id: 1, id_usuario: 1, id_producto: 2, cantidad: 1 },
        { id: 2, id_usuario: 3, id_producto: 1, cantidad: 2 },
        { id: 3, id_usuario: 4, id_producto: 4, cantidad: 1 },
        { id: 4, id_usuario: 2, id_producto: 3, cantidad: 3 },
        { id: 5, id_usuario: 5, id_producto: 5, cantidad: 2 }
    ]
    },
    {
    tabla: 'categorias',
    datos: [
        { id: 1, nombre: 'Electrónica' },
        { id: 2, nombre: 'Musica' },
        { id: 3, nombre: 'Cuerda' },
        { id: 4, nombre: 'Cuerda' },
        { id: 5, nombre: 'Electrónica' }
    ]
    },
    {
    tabla: 'reviews',
    datos: [
        { id: 1, id_producto: 1, id_usuario: 2, calificacion: 5, comentario: 'Voz poderosa' },
        { id: 2, id_producto: 2, id_usuario: 3, calificacion: 4, comentario: 'Retumba espectacular' },
        { id: 3, id_producto: 3, id_usuario: 1, calificacion: 3, comentario: 'Cumple con lo esperado' },
        { id: 4, id_producto: 4, id_usuario: 4, calificacion: 4, comentario: 'Buen manejo' },
        { id: 5, id_producto: 5, id_usuario: 5, calificacion: 5, comentario: 'Calidad sobresaliente' }
    ]
    }
];
console.log(inserts);