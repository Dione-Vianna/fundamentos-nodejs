
import http from 'node:http';
import { json } from './middlewares/json.js';
import { routes } from './routes.js';


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

// Query Parameters: URL Stateful => Filtros, paginação, não-obrigatorios
// Route Parameters: Identificação de recurso 
// Request Body: Envio de informações de um formulário

// http://localhost:3000/users?userId=1&name=John

// GET http://localhost:3000/users/1
// DELETE http://localhost:3000/users/1

// POST http://localhost:3000/users  <- body


const server = http.createServer(async (request, response) => {
  const {method, url} = request

  await json(request, response)

  const route = routes.find(route => {
    return route.method === method && route.path.test(url)
  })

  if(route){
    const routeParams = request.url.match(route.path)
    return route.handle(request, response)
  }
 

  return response.writeHead(404).end()
})

server.listen(3000, () => {
  console.log('server is running on port 3000')
})



