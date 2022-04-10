
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

}

export default FuncionariosDAO