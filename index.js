const mongoose = require('mongoose');
require('dotenv').config();

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;

//Realizar la conexion
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@${dbHost}/`);
        console.log('La conexion a la base de datos ha sido exitosa ✅')
    } catch (err) {
        console.log('Error al conectar a la base de datos ❌', err)
    }
};

connectDB();