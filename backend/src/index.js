const express = require('express'); 
const routes = require('./routes'); //./ retorna arquivo da mesma pasta
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

/**
 * Rotas (enderço completo) /Recursos (fim endereço)
 */

 /**
  * Métodos HTTP
  * 
  * GET: buscar info do back-end
  * POST: criar info no back-end
  * PUT: alterar info
  * DELETE: deleta info
  */

 /**
  * Tipos de parametros
  * 
  * Query params:parametros nomeados enviados na rota após "?" para filtros, paginação
  * **
  * app.get('/users', (request, response) => {
    const params = request.params;
//entra com http://localhost:3333/users?name=Antonio&idade=30
    console.log(params);

    return response.json({
        id: 1,
        evento: 'Semana OmniStack 11.0',
        aluno: 'Antonio'
    });
});
  * **
  * Route params: parametros para identificar recursos
  * **
  * app.get('/users/:id', (request, response) => {
    const params = request.params;

    console.log(params);

    return response.json({
        id: 1,
        evento: 'Semana OmniStack 11.0',
        aluno: 'Antonio'
    });
});
  * **
  * Requesty Body: corpo da requisição, utilizado para criar ou alterar recursos
  * **
  * app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        id: 1,
        evento: 'Semana OmniStack 11.0',
        aluno: 'Antonio'
    });
});
  * **
  */

  /**
   * BANCO DE DADOS
   * SQL: MySQL, SQLLite, PostgreSQL,Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, couchDB, etc
   * 
   * DRIVER: SELECT * FROM users
   * QUERY BUILDER: table("users").select('*').where()
   */

app.use(routes);

app.listen(3333, function () {
    console.log("servidor rodando");
  });

