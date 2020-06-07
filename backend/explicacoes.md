
// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação do back-end
// DELETE: Remover uma informação do back-end

// POST: http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/5 = Buscar dados do usuário com ID 5 

// Request Params: ParÂmetros que vem na propria rota que identificam um recurso
// Query Param: Parametros que vem na propria rota geralmente opcionais para filtros, paginação e etc..
// Request Body: Parametros para criação/ atualização das informação

// SELECT * FROM users WHERE name = "Gabriel"
// knex('users').where('name', 'Diego').select('*');

// const users = [
//   'Diego', // 0
//   'Cleiton', // 1
//   'Robson', // 2
//   'Gabriel' // 3
// ];

// app.get('/users', (req, res) => {
//   const search = String(req.query.search).toLowerCase();

//   const filteredUsers = search ? users.filter(user => user.toLowerCase().includes(search)): users;

//   console.log(filteredUsers);

//   res.json(filteredUsers);
// });

// app.get('/users/:id', (req, res) => {
//   const id = Number(req.params.id);

//   const user = users[id];

//   return res.json(user)
// })

// app.post('/users', (req, res) => {
//   const data = req.body; 

//   return res.json(data);
// })
