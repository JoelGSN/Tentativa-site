import express from 'express'
import cliente_routes from './routes/cliente_routes.js'
import produto_routes from './routes/produto_routes.js'
// import part_routes from './routes/part_routes.js'
// import voto_routes from './routes/voto_routes.js'
import sequelize from './config/database.js' // Descomentado para o try/catch funcionar

const app = express();
app.use(express.json())

app.use('/cliente', cliente_routes)
app.use('/produto', produto_routes)
// app.use('/votos', voto_routes)

try {
  await sequelize.authenticate()
  await sequelize.sync()
  app.listen(3000, () => console.log("\x1b[1;4;36m", "Server inicializado novamente."))
} catch (erro) {
  console.error('Falha ao Iniciar:', erro)
  process.exit(1)
}
