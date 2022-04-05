// Entidade Funcionários da API da Escola Mercúrio
import FuncionariosDAO from '../DAO/funcionarios-DAO.js';

const funcionariosController = (app, db)=>{
	const funcionariosDAO = new FuncionariosDAO(db)
	app.get('/funcionarios/todos', async (req, res)=>{
		try {
			const listaDosFuncionarios = await funcionariosDAO.listarTodosFuncionarios()
			res.status(200).json({listaDosFuncionarios})
		} catch (error) {
			res.status(400).json({
				"mensagem de erro": error.message,
				"erro": true,
			})
		}
		
	})
}

export default funcionariosController