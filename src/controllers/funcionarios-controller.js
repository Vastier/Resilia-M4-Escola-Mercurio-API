// Entidade Funcionários da API da Escola Mercúrio
import Funcionarios from '../models/funcionarios.js';

const funcionariosController = (app, db)=>{
	const funcionariosModel = new Funcionarios(db)

	app.get('/funcionarios/todos', async (req, res)=>{
		try {
			const listaDeTodosOsFuncionarios = await funcionariosModel.listarTodosFuncionarios()
			res.status(200).json({
				"erro": false, 
				"Lista dos Funcionários": listaDeTodosOsFuncionarios
			})
		} catch (error) {
			res.status(400).json({
				"erro": true,
				"Mensagem de erro": error.message
			})
		}
	})
}

export default funcionariosController