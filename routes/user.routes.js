import express from "express";
import User from '../models/User.js'

const user = express.Router();

user.get('/', (req, res) => res.send('Rota de Usuarios'));

user.post('/register', (req, res) => {

    console.log(req.body);
    
});

export default user;