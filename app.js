
const dotenv=require('dotenv');
dotenv.config();

// importo desde models la configuracion
const Server = require("./models/server")

const server = new Server()

// llamo al metodo listen dentro de server
server.listen();






