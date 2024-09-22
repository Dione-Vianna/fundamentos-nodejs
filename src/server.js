
import http from 'node:http';
import { json } from './middlewares/json.js';

// - HTTP METHODS
// GET => Buscar uma informação do back-end
// POST => Criar uma informação no back-end
// PUT => Atualizar uma informação no back-end
// PATCH => Atualizar uma informação especifica de um recurso no back-end
// DELETE => Remover uma informação do back-end


// GET /users => Buscando usuário do back-end
// POST /users => Criar um usuário do back-end

// Stateful - Stateless

// - Stateful guarda em memoria
// - Stateless guarda em um banco de dados

// Cabeçalhos (Requisição/resposta) => Metadados

// HTTP - Status code

const users = []

const server = http.createServer(async (request, response) => {
  const {method, url} = request

  await json(request, response)

  if (method === "GET" && url === "/users") {

    return response
    .end(JSON.stringify(users)) // JSON - javaScript Object Notation
  }

  if(method === "POST" && url === "/users") {
    const {id, name, email} = request.body
    users.push({
      id, 
      name,
      email
    })
    return response.writeHead(201).end()
  }

  return response.writeHead(404).end()
})

server.listen(3000, () => {
  console.log('server is running on port 3000')
})



