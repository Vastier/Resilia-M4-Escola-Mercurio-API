import db from "./sqlite-db.js"

const CRIA_TABELA_FUNCIONARIOS = `
CREATE TABLE IF NOT EXISTS "FUNCIONARIOS"(
	"ID" INTEGER PRIMARY KEY AUTOINCREMENT,
	"NOME" varchar(64),
	"CPF" varchar(64),
	"TELEFONE" varchar(64),
	"EMAIL" varchar(64),
	"DATA_DE_NASCIMENTO" varchar(64),
	"CARGO" varchar(64),
	"DATA_DE_ADMISSAO" varchar(64)
	)`

	// dados gerados pelo randomuser.me
const POPULA_TABELA_FUNCIONARIOS = `
INSERT INTO FUNCIONARIOS (NOME, CPF, TELEFONE, EMAIL, DATA_DE_NASCIMENTO, CARGO, DATA_DE_ADMISSAO)
VALUES
('Gláucia Farias', '000.000.000-01', '(22) 1579-6720', 'glaucia.farias@example.com', '29/05/1980', 'Inspetora', '05/03/2015'),
('Gaudêncio de Souza', '000.000.000-02', '(48) 0790-2006', 'gaudencio.desouza@example.com', '23/04/1948', 'Professor', '20/10/2010'),
('Olvani Pires', '000.000.000-03', '(75) 9617-4361', 'olvani.pires@example.com', '24/10/1996', 'Diretora', '09/02/2012'),
('Onira Sales', '000.000.000-04', '(72) 1270-7981', 'onira.sales@example.com', '01/03/1968', 'Professora', '25/09/2002'),
('Niviane Gomes', '000.000.000-05', '(29) 3595-1963', 'niviane.gomes@example.com', '13/02/1992', 'Bibliotecária', '18/05/2007'),
('Franca Ribeiro', '000.000.000-06', '(75) 7089-4468', 'franca.ribeiro@example.com', '25/12/1963', 'Nutricionista', '10/05/2005'),
('Romário Dias', '000.000.000-07', '(43) 0226-9496', 'romario.dias@example.com', '02/06/1993', 'Cozinheiro', '08/11/2003')
`

function criaTabelaFuncionarios() {
	db.run(CRIA_TABELA_FUNCIONARIOS, (error)=> {
		if (error)
		console.log(`Ocorreu o seguinte erro ao tentar criar a tabela FUNCIONARIOS: \n ${error.message}`);
	})
}

function populaTabelaFuncionarios() {
	db.run(POPULA_TABELA_FUNCIONARIOS, (error)=> {
		if (error)
		console.log(`Ocorreu o seguinte erro ao tentar popular a tabela FUNCIONARIOS: \n ${error.message}`);
	})
}

db.serialize(()=> {
	criaTabelaFuncionarios();
	populaTabelaFuncionarios();
})