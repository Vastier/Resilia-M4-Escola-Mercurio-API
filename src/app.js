import express from "express";
import funcionariosController from "./controllers/funcionarios-controller.js";
import indexController from "./controllers/index-controller.js";
import db from './database/sqlite-db.js';
import cors from 'cors'



const app = express()

app.use(express.json())

app.use(cors())


//Página principal usada como fallback redirecionando para o Github.
indexController(app)


funcionariosController(app, db)


export default app