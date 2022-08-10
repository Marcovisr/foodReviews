// 'npm run dev' para rodar o código
// 'import' é usado para importar

import  express  from "express";
import dotenv from 'dotenv';
import connect from './config/db.js';


// load config
dotenv.config({ path: './config/config.env'});

const PORT = process.env.PORT || 5000;

// run server
const server = express();

server.listen(
    
    PORT,
    console.log(`Servidor rodando no ambiente de ${process.env.NODE_ENV} na porta ${PORT}...`)
    
    );

// Connect to the database
connect();

server.get('/', (req, res) => res.send("Hello minha tropa!"));
server.get('/users', (rec, res) => res.send("Página de usuários"));


