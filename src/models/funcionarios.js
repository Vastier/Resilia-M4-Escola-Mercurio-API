import FuncionariosDAO from '../DAO/funcionarios-DAO.js'


class Funcionarios{
	constructor(db){
		this.dao = new FuncionariosDAO(db)
	}
	listarTodosFuncionarios = async () => {
		try {
			const resposta = await this.dao.listarTodosFuncionarios()
			if (resposta.length > 0){
				return resposta
			} else {
				throw new Error("Lista está vazia.")
			}
		} catch (error) {
			throw new Error(error.message)
		}
	}


}

export default Funcionarios