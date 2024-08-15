const express = require('express');
// requerimos cors
const cors = require('cors'); // Cors es un middleware

class Server {
    constructor(port) {
        this.app = express();
        this.port = process.env.PORT_API;
        // Acceso a ruta
        this.usuariosPath = '/api/usuarios'

        // Middlewares 
        this.middlewares();
        // Rutas de mi aplicación
        this.routes();
    }

    middlewares(){
        
        // Configurar CORS
        this.app.use(cors());
        // LEctura y parseo del body
        this.app.use(express.json());
        // Directorio Público
        this.app.use(express.static('public'))
    }

    routes() {
        
        this.app.use(this.usuariosPath, require("../routes/usuarios"))
    }

    listen() {

        this.app.listen(this.port, () => {
            console.log(`Server Api en puerto:${this.port}`)
        })

    }
}

module.exports = Server;