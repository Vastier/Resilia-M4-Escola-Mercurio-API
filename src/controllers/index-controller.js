//Página de fallback na rota principal redirecionando para o repositório.

const indexController = (app)=>{
	app.get('/', (req, res)=>{
		res.send(`
		<!DOCTYPE html>
		<p align="center">
  			<img src="https://raw.githubusercontent.com/Vastier/Resilia-M4-Escola-Mercurio-API/master/src/assets/escola-mercurio-logo.png" alt="Logo da Escola Mercúrio" width="200px">
		</p>
		<h1 align="center">API da Escola Mercúrio - Entidade Funcionários</h1>
		<h3 align="center">Link para mais informações: </h3>
		<a style="margin:auto; text-align:center; display:block;" href="https://github.com/Vastier/Resilia-M4-Escola-Mercurio-API">Github da API</a>
		`)
	})
}

export default indexController