const express = require('express');
const route = express.Router(); //ele terá diversos métodos
const homeController = require('./controllers/homeController');
const livroController = require('./controllers/livroController');


//rotas da aplicação
//*********************** */
route.get('/',homeController.homeView)

//rota produto com parametros
route.get('/livro/:id',livroController.livroView)

module.exports = route; //qualquer modulo que importar o roules.js pode importar esse modulo


