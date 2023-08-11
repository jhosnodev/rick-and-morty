const PORT = 3001;
const server = require('./app')
const {conn} = require('./DB_connection')

server.listen(PORT, async ()=>{
  await conn.sync({force:true})
  console.log(`Server is listening on port: ${PORT}`);
})


