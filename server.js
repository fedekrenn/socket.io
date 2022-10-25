const express = require('express');

const { Server: HttpServer } = require('http')
const { Server: Socket } = require('socket.io')

const ContenedorProductos = require('./src/class/Products')
const ContenedorMensajes = require('./src/class/Messages')

/* --------- Knex --------- */

const knexConfigMariaDB = require('./src/options/dbMariaDB')
const knexConfigSQLite = require('./src/options/dbSqlite3')
const knexProd = require('knex')(knexConfigMariaDB)
const knexChat = require('knex')(knexConfigSQLite)

/* --- Instancias  ---- */

const manejadorProductos = new ContenedorProductos(knexProd, 'productos')
const manejadorMensajes = new ContenedorMensajes(knexChat,'mensajes')


/* ------ Socket.io ------ */

const app = express();
const httpServer = new HttpServer(app)
const io = new Socket(httpServer)

// Configuración de socket

io.on('connection', async socket => {
    
    console.log('Se conectó un nuevo cliente');

    await manejadorProductos.createTable()
        .catch(err => {
            console.log(err);
        })

    await manejadorMensajes.createTable()
        .catch(err => {
            console.log(err);
        })

    // Productos
    socket.emit('productos', await manejadorProductos.getAll());

    socket.on('update', async producto => {
        await manejadorProductos.save(producto);
        io.sockets.emit('productos', await manejadorProductos.getAll());
    })


    // Mensajes
    socket.emit('mensajes', await manejadorMensajes.getAll());

    socket.on('new-message', async mensaje => {
        mensaje.date = new Date().toLocaleString()
        await manejadorMensajes.save(mensaje)
        io.sockets.emit('mensajes', await manejadorMensajes.getAll());
    })

});

/* ----------------------- */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


const PORT = process.env.PORT || 8080;

const server = httpServer.listen(PORT, () => console.log(`Servidor http escuchando en el puerto ${server.address().port}`));
server.on('error', error => console.log(`Error en servidor ${error}`));