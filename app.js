const porta = 3000 //porta
const express = require('express');
const app = express();
const routes = require('./routes');


//configurações da aplicação
app.use(
    express.urlencoded(
        {
            extended:true
        }
    )
)

app.use('/',routes); //configuração para chegar em uma rota, verifica se pode ou não acessar a rota.

//coloca o servidor no ar
app.listen(porta,()=>{
    console.log('Servidor Executando')
    console.log('Porta: ',porta)
    console.log('URL: ','http://localhost:'+porta)
})