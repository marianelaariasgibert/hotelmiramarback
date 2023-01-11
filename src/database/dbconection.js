
require('dotenv').config();
const mongoose = require('mongoose');
const URL = process.env.MONGOATLAS;

exports.getConnection = async() => {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        return "Conexion establecida!"
    } catch (error) {
        return "Conexion Fallida :("
    }
}
