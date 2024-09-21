
import http from 'node:http';

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

const server = http.createServer((request, response) => {
  const {method, url} = request

  if (method === "GET" && url === "/users") {
    return response
    .setHeader('Content-type', 'application/json')
    .end(JSON.stringify(users)) // JSON - javaScript Object Notation
  }

  if(method === "POST" && url === "/users") {
    users.push({
      id: 1, name: "John Doe",
      email: 'johndoe@example.com'
    })
    return response.writeHead(201).end()
  }

  return response.writeHead(404).end()
})

server.listen(3000, () => {
  console.log('server is running on port 3000')
})



