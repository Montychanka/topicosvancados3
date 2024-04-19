const express = require('express');


const app = express();

app.listen(8000, () => {
    console.log('App rodando na porta 8000');
});


var myData = [];
var listagem = [];

listagem.push("Rian, Cachorro, Topicos Avancados em Sistemas de Informacao I");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/listagem', (req, res) => {
    res.json(listagem);
});

app.post('/criar', (req, res) => {const
    { nome, rgm, disciplina } = req.body;
    myData.push(nome);
    myData.push(rgm);
    myData.push(disciplina);
    res.json(myData);
   });