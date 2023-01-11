const express = require('express');
require ('dotenv').config();
const cors = require ('cors');
const morgan = require('morgan');
const PORT = process.env.PORT
const {getConnection} = require('./src/database/dbconection')

const app = express();
const contactoControllers = require('./src/controllers/contactoControllers')


app.use(express.json());
app.use(express.urlencoded ({extended: true}));
app.use(cors());
app.use(morgan('common'));

getConnection().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

app.get('/', (req, res) => {});

app.post('/consulta', async (req, res) => {
    const { name, lastname, email, phone, comments} = req.body;
    console.log(`${name} ${lastname} ${email} ${phone} ${comments}`);

    await contactoControllers.create(req.body);

    res.send('consulta creada')
});

app.delete('/:id', (req, res) => {});




app.listen(PORT, () =>{});


