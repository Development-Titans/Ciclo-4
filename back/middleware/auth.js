const jwt = require('jsonwebtoken');

exports.verificar = async (req, res, next) => {
    // ! Leer el token del header o del cuerpo
    // Valida que si tenga el token
    const token = req.header('x-auth-token')

    // ! Revisar si hay token
    if (!token) {
        return res.status(401).json({msg: 'No se recibe token, permiso no valido'})
    }

    // ! Validar el token
    try {
        // Verificamos que el token este bien
        const cifrado = jwt.verify(token, process.env.SECRETA)
        // Si esta bien entonces respondemos
        req.usuario = cifrado.usuario;
        // luego le decimos next para que continue en la siguiente linea en routes/productos, linea 17
        next();
    } catch (error) {
        res.status(401).json({msg: 'Token no valido'})
    }
}

// ! Verificar si el rol sea administrador
exports.verificarAdmin = async (req, res, next) => {

    const role = req.header('role')

    try {
        if(role === "Admin" || role === "admin" ){
            next();
        }
    } catch (error) {
        res.status(404).json({msg: 'Usted no tiene privilegios para hacer esta operacion'})
    }
}