
class FuncionariosDAO {
	constructor(db){
		this.db = db
	}


	listarTodosFuncionarios = () => {
		return new Promise((resolve, reject) => {
			this.db.all('SELECT * FROM FUNCIONARIOS', (error, rows) => {
				if(error){
					reject({
						"msg": error.message,
						"erro": true,
					})
				}else{
					resolve({
						"funcionarios": rows,
						"erro": false,
					})
				}
			})
		});
	}
}

export default FuncionariosDAO