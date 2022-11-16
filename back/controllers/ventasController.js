const Ventas = require('../models/Ventas')

exports.mostrarVentas = async (req, res) => {
    try {
        const ventas = await Ventas.find();
        res.json(ventas);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un problema')
    }
}