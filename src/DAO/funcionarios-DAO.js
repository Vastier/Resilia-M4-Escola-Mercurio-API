
class FuncionariosDAO {
	constructor(db){
		this.db = db
	}


	listarTodosFuncionarios = () => {
		return new Promise((resolve, reject) => {
			this.db.all('SELECT * FROM FUNCIONARIOS', (error, rows) => {
				if(error){
					reject({
						"erro": true,
						"msg": error.message,
					})
				}else{
					resolve({
						"erro": false,
						"funcionarios": rows,
					})
				}
			})
		});
	}
}

export default FuncionariosDAO