
const { response, request } = require('express')

const usuariosGet = (req = request, res = response) => {

    // localhost:4000/api/usuarios/?q=hola&nombre=fede&apikey=1234
    // loq ue está después del signo de preguntas es una query, separada por el & cada cosa

    const query = req.query
    // Desestructuro tambien
    const{q,nombre,apikey} = req.query
    
    res.json({
        mensaje: "get Api - controlador",
        //query
        q,
        nombre,
        apikey
    });
}


const usuariosPost = (req, res) => {

    const body = req.body;
    console.log(body); // muestra los datos del body en la consola

    res.json({
        mensaje: "post Api - controlador",
        body
    });
}

const usuariosPut = (req, res) => {

    // const id = req.params.id;
    const { id } = req.params;
    res.json({
        mensaje: "post Api - controlador",
        id

    });
}

const usuariosDelete = (req, res) => {
    res.json({ mensaje: "post Api - controlador" });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
};
