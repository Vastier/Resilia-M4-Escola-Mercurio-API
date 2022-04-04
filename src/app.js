import express from "express";
import funcionariosController from "./controllers/funcionarios-controller.js";
import indexController from "./controllers/index-controller.js";
import db from './database/sqlite-db.js';



const app = express()



//Página principal usada como fallback redirecionando para o Github.
indexController(app)


funcionariosController(app, db)


export default app