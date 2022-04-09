
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
						reject({
							"erro": true,
							"Mensagem de erro": error.message,
						})
					}else{
						resolve({
							"erro": false,
							"Lista dos Funcionários": rows,
						})
					}
			})
		})
	}
}

export default FuncionariosDAO