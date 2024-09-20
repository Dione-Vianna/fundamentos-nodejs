
import http from 'node:http';

// rota para criar um usuário

// criar um usuário
// atualizar um usuário
// deletar um usuário
// buscar um usuário
// buscar vários usuários

// - HTTP METHODS
// GET => Buscar uma informação do back-end
// POST => Criar uma informação no back-end
// PUT => Atualizar uma informação no back-end
// PATCH => Atualizar uma informação especifica de um recurso no back-end
// DELETE => Remover uma informação do back-end


// GET /users => Buscando usuário do back-end
// POST /users => Criar um usuário do back-end

const server = http.createServer((request, response) => {
  const {method, url} = request

  if (method === "GET" && url === "/users") {
    return response.end('Listagem de usuário')
  }

  if(method === "POST" && url === "/users") {
    return response.end("Criação de usuário")
  }

  return response.end('hello World')
})

server.listen(3000, () => {
  console.log('server is running on port 3000')
})



