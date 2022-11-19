const Usuario = require('../models/Usuario')
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken');

exports.autenticarUsuario = async (req, res) => {
    // Revisa si hay errores
    const errors = validationResult(req);
    // Si errores no esta vacio entonces {
    if (!errors.isEmpty()) {
        return res.status(400).json({errores: errors.array()});
    }

    // Extraer el email y password

    const { email, password} = req.body;

    try {
        // Revisar que sea un usuario registrado
        // Buscamos y si el email esta registrado
        let usuario = await Usuario.findOne({email});
        // si el usuario no se encuentra es porque no esta registrado, le decimos que si no tiene datos la variable usuario entonces{
        if(!usuario){
            return res.status(400).json({msg: 'El usuario no existe'});
        }

        // Revisar el password en caso de que exista
        const passCorrecto = await bcryptjs.compare(password, usuario.password)
        // Si el password es incorrecto entonces {
        if (!passCorrecto) {
            return res.status(400).json({msg: 'Contraseña incorrecta'})
        }

        // ? Si todo es correcto
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
            res.json({ token });
        });


    } catch (error) {
        console.log(error)
    }
}

// ! Muestra que usuario esta autenticado

exports.usuarioAutenticado = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.usuario.id);
        // console.log(usuario)
        res.json({usuario});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Hubo un error'});
    }
}