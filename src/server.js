import app from "./app.js"

// Pega primeiro o valor de `PORT` caso exista, usa a porta 3042 caso não. 
const port = process.env.PORT || 3042

app.listen(port, ()=>{
	console.log(`Servidor aberto aqui: http://localhost:${port}`)
})
