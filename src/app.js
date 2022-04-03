import express from "express";
import indexController from "./controllers/index-controller.js";

const app = express()


//Página principal usada como fallback redirecionando para o Github.
indexController(app)

export default app