
class FuncionariosDAO {
	constructor(db){
		this.db = db
	}


	listarTodosFuncionarios = () => {
		return new Promise((resolve, reject) => {
			this.db.all(
				'SELECT * FROM FUNCIONARIOS',
				(error, rows) => {
					if(error){
						reject(error)
					}else{
						resolve(rows)
					}
			})
		})
	}

	insereFuncionario = (funcionario) => {
		return new Promise((resolve, reject) => { 
			this.db.run(
				'INSERT INTO FUNCIONARIOS (NOME, CPF, TELEFONE, EMAIL, DATA_DE_NASCIMENTO, CARGO, DATA_DE_ADMISSAO) VALUES (?, ?, ?, ?, ?, ?, ?)',
				funcionario.nome,
				funcionario.cpf,
				funcionario.telefone,
				funcionario.email,
				funcionario.dataDeNascimento,
				funcionario.cargo,
				funcionario.dataDeAdmissao,
				(error) => {
					if (error) {
						reject(error)
					} else {
						resolve(`Funcionário de nome: '${funcionario.nome}' adicionado ao banco de dados com sucesso.`)
					}
				}
			)
		 })
	}

	buscaCpfFuncionario = (cpf) => {
		return new Promise((resolve, reject) => {
			this.db.all(
				'SELECT * FROM FUNCIONARIOS WHERE CPF = ?',
				cpf,
				(error, rows) => {
					if(error){
						reject(error)
					}else{
						resolve(rows)
					}
			})
		})
	}

}

export default FuncionariosDAO