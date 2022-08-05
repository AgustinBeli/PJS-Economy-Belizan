const express = require("express");
// const cors = require("cors");

const app = express();
// app.use(cors());

const port = 3000;

const transactions = [
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
    }, {
        "type": "Egreso",
        "metod": "mercadopago",
        "amount": "4000",
        "spent": "fijo",
        "category": "SERVICIO",
        "description": "Claro",
        "codigo": 12
    }];

console.log(transactions)

app.get("/", (req, res) => {
    res.send(`Ok, ingresaron a localhost! ${port}`);
});

app.get("/transactions", (req, res) => {
    res.send(transactions);
});

app.get("/transactions/:id", (req, res) => {
    const codigo = req.params.id;
    const selectedTransaction = transactions.filter(
        (transaction) => transaction.codigo == codigo
    );
    res.send(selectedTransaction);
});

app.post("/transactions", (req, res) => {
    const transaction = "Aca va la transaction que me vino";
    transactions.push(transaction);
    res.send("Todo ok");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});