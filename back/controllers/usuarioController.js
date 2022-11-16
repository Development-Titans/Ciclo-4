const Usuario = require('../models/Usuario')
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken');

exports.crearUsuario = async (req, res) => {

    // Revisa si hay errores
    const errors = validationResult(req);
    // Si errores no esta vacio entonces {
    if (!errors.isEmpty()) {
        return res.status(400).json({errores: errors.array()});
    }

    // Extraer el email y password para validar
    const { email, password} = req.body;

    try {
        // Busca el email haber si esta ya registrado
        let usuario = await Usuario.findOne({email});
        
        // Si hay un usuario en el campo
        if (usuario) {
            return res.status(400).json({ msg: 'El usuario ya existe'})
        }

        // Crea el nuevo usuario
        usuario = new Usuario(req.body);

        // Hashear el password
        const salt = await bcryptjs.genSalt(10);
        usuario.password = await bcryptjs.hash(password, salt);

        // Guardar nuevo usuario
        await usuario.save();

        // Crear y firmar el jwt
        // ! la pagina para consultar el token cuando creemos el usuario es jwt.io
        const payload = {
            usuario: {
                id: usuario.id
            }
        };

        // firmar el jwt, esto viene del archivo .env
        jwt.sign(payload, process.env.SECRETA, {
            // Le decimos por cuanto tiempo va hacer valido el token
            expiresIn: 3600 // 1 hora
            // Capturamos el error y el token
        }, (error, token) => {
            // Si hay error
            if (error) throw error;

            // Mensaje de confirmacion
            res.json({token: token});
        });

    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error')
    }
}