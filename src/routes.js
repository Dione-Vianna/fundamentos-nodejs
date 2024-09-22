import { Database } from './database.js';
import { randomUUID } from 'node:crypto';
import { buildRouterPath } from './utils/build-route-path.js';

const database = new Database()

export const routes = [
  {
    method: 'GET',
    path: buildRouterPath('/users'),
    handle: (request, response) => {
      const users = database.select('users')
      return response.end(JSON.stringify(users)) // JSON - javaScript Object Notation
    }
  },
  {
    method: 'POST',
    path: buildRouterPath('/users'),
    handle: (request, response) => {
      const {name, email} = request.body
    
    const user = {
      id: randomUUID(),
      name,
      email
    }

    database.insert('users', user)

    return response.writeHead(201).end()

    }
  },
  {
    method: 'DELETE',
    path: buildRouterPath('/users/:id'),
    handle: (request, response) => {
    
    }
  },
]