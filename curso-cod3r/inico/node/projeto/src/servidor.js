const porta = 3003

const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const bancoDeDados = require('./bancoDeDados')

// app.use sem url -> responde a todos os enderecos 
app.use(bodyParser.urlencoded( {extended: true} ))

// todos os produtos
app.get('/produtos', (req, res) => {
    res.send(bancoDeDados.getProdutos()) 
})

// produto especifico
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

// salvar
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto(
            {
                nome: req.body.nome,
                preco: req.body.preco
            }
        )
        res.send(produto)
})

// alterar caso exista
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto(
            {
                id: req.params.id, 
                nome: req.body.nome,
                preco: req.body.preco
            }
        )
        res.send(produto)
})

// deletar caso exista
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.deleteProduto(req.params.id)
        res.send(produto)
})

app.listen(porta, () => {
    console.log('executando na porta 3003')
})

