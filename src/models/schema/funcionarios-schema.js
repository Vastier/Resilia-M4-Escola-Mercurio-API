import JoiBase from "joi"
import { validator } from 'cpf-cnpj-validator'
import JoiDatas from "@hapi/joi-date"
import JoiTelefones from "joi-phone-number";


const Joi = JoiBase.extend(validator).extend(JoiDatas).extend(JoiTelefones);


const funcionariosSchema = Joi.object({
	nome: Joi.string()
		.messages({
			'string.empty': 'Nome está vazio'
		})
		.required(),

	cpf: Joi.document()
		.cpf()
		.messages({
			'document.cpf': 'CPF inválido, aceitamos no padrão xxx.xxx.xxx-xx ou somente os números'
		})
		.required(),

	telefone: Joi.string()
		.phoneNumber({ defaultCountry: 'BR', format: 'national' , strict: true})
		.messages({
			'phoneNumber.invalid': 'Número de Telefone inválido, é necessário inserir os dois dígitos do DDD e o número de telefone'
		})
		.required(),

	email: Joi.string()
		.email({tlds: false})
		.messages({
			'string.email': 'Email inválido'
		})
		.required(),

	dataDeNascimento: Joi.date()
		.format('DD/MM/YYYY')
		.messages({
			'date.format': 'Data de Nascimento inválida, aceitamos somente no formato DD/MM/AAAA'
		})
		.raw(),

	cargo: Joi.string()
		.messages({
		'string.empty': 'Cargo está vazio'
		})
		.required(),

	dataDeAdmissao: Joi.date()
		.format('DD/MM/YYYY')
		.messages({
			'date.format': 'Data de Admissão inválida, aceitamos somente no formato DD/MM/AAAA'
		})
		.raw(),

}).options({ abortEarly: false })

export default funcionariosSchema
