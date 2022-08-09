const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const puerto = 3000;

const operaciones = [
    {
        "type": "Ingreso",
        "spent": "fijo",
        "metod": "efectivo",
        "amount": "40000",
        "category": "SUELDO",
        "description": "Osaka",
        "codigo": 0
    }, {
        "type": "Ingreso",
        "spent": "fijo",
        "metod": "tarjeta",
        "amount": "40000",
        "category": "SUELDO",
        "description": "Osaka",
        "codigo": 2
    }
];

app.get('/', (req, res) => {
    res.send(`Ingresaste al servidor alojado en el puerto: ${puerto}`);
});

app.get('/operaciones', (req, res) => {
    res.send(operaciones);
});

app.get('/operaciones/:id', (req, res) => {
    const codigo = req.params.id;
    const seleccionarOperacion = operaciones.filter((operacion) => operacion.codigo == codigo);
    res.send(seleccionarOperacion);
});

app.post('/operaciones', (req, res) => {
    console.log(req.body);
    const operacion = req.body;
    operaciones.push(operacion);
    res.send("Funciona");
});

app.listen(puerto, () => {
    console.log(`ingresando operaciones del puerto: ${puerto}`);
});