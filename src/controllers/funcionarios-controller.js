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

	app.post('/funcionarios/inserir', async (req, res)=>{
		const funcionario = req.body
		try {
			const resposta = await funcionariosModel.inserirFuncionario(funcionario)
			res.status(201).json({
				"erro": false, 
				"Resposta": resposta
			})
		} catch (error) {
			const cleanmsg = error.message.replace(' (cpf)','') // Corrige o 'bug' do JOI onde operações .external() sempre adicionam o label em parêntesis no final do erro. ( isso ou eu não entendi como desativa, segue referência: https://github.com/sideway/joi/pull/2651 )
			res.status(500).send({
				"erro": true,
				"Mensagem de erro": cleanmsg,
			})
		}
	})

	app.get('/funcionarios/buscacpf=:cpf', async (req, res)=>{
		const cpf = req.params.cpf
		try {
			const funcionarioEncontrado = await funcionariosModel.buscaFuncionarioPeloCpf(cpf)
			res.status(200).json({
				"erro": false, 
				"Funcionário": funcionarioEncontrado
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