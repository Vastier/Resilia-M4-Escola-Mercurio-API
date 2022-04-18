import JoiBase from 'joi'
import { validator } from 'cpf-cnpj-validator'
import FuncionariosDAO from '../DAO/funcionarios-DAO.js'
import FuncionariosSchema from './schema/funcionarios-schema.js'

const Joi = JoiBase.extend(validator);

class Funcionarios{
	constructor(db){
		this.dao = new FuncionariosDAO(db)
		this.schemaVerificaCpfDuplicado = Joi.object({
			cpf: Joi.document()
				.external(this._verificaCpfDuplicado, "Checa se o CPF já está cadastrado no Banco de dados.")
		})
	}
	
	listarTodosFuncionarios = async () => {
		try {
			const resposta = await this.dao.listarTodosFuncionarios()
			if (resposta.length > 0){
				return resposta
			} else throw "A Lista de Funcionários está vazia, use a rota '/funcionarios/inserir' caso queira inserir um funcionário."
		} catch (error) {
			throw new Error(error)
		}
	}

	inserirFuncionario = async (funcionario) => {
		try {

			const funcionariosSchemaComCpf = FuncionariosSchema.concat(this.schemaVerificaCpfDuplicado)

			const funcionarioValidado = await funcionariosSchemaComCpf.validateAsync(funcionario)

			return await this.dao.insereFuncionario(funcionarioValidado)
		} catch (error) {
			throw new Error(error)
		}
	}
	
	buscaFuncionarioPeloCpf = async (cpf) => {
		try {
			const resposta = await this.dao.buscaCpfFuncionario(cpf)
			if (resposta.length > 0){
				return resposta
			} else throw "Não foi encontrado funcionário com este CPF."
		} catch (error) {
			throw new Error(error)
		}
	}

	_verificaCpfDuplicado = async (cpf) => {
		try {
			const resposta = await this.dao.buscaCpfFuncionario(cpf)
			if (resposta.length <= 0){
				return undefined 
			} else throw "Este CPF já foi cadastrado."
		} catch (error) {
			throw new Error(error)
		}
	}
}

export default Funcionarios