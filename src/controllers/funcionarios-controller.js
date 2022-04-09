// Entidade Funcionários da API da Escola Mercúrio
import FuncionariosDAO from '../DAO/funcionarios-DAO.js';

const funcionariosController = (app, db)=>{
	const funcionariosDAO = new FuncionariosDAO(db)

	app.get('/funcionarios/todos', async (req, res)=>{
		try {
			const listaDeTodosOsFuncionarios = await funcionariosDAO.listarTodosFuncionarios()
			res.status(200).json({listaDeTodosOsFuncionarios})
		} catch (error) {
			res.status(400).json({
				"erro": true,
				"Mensagem de erro": error.message,
			})
		}
	})
}

export default funcionariosController