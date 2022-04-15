<!-- markdownlint-disable MD033 -->
# <center> Resilia M4 - T11 - API Escola Mercúrio <br> Entidade Funcionários <br> <img src="./src/assets/escola-mercurio-logo.png" alt="Logo da Escola Mercúrio" width="200px"></center>

Como projeto de finalização do Módulo 04 da [Resilia Educação](https://www.resilia.com.br/) em que tivemos que desenvolver propostas de APIs que seriam o MVP de um aplicativo, nós do Grupo 2 escolhemos o tema Escola e disso surgiu a Escola Mercúrio!

Esse repositório pode ser acessado no [Heroku](https://www.heroku.com) [Clicando Aqui.](https://resilia-m4-escola-mercurio-api.herokuapp.com/).

Nesse projeto eu fiquei responsável por criar uma API REST para a Escola Mercúrio, onde será possível realizar operações CRUD na entidade `funcionarios`.

Projeto feito utilizando o [Node.js](https://nodejs.org/) e o framework [Express](https://expressjs.com/) e também tentando seguir o [padrão MVC](https://pt.wikipedia.org/wiki/MVC).

Também é um objetivo pessoal seguir as recomendações do [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/).

## Objetivo

Esse projeto tem como objetivo criar uma API REST da Escola Mercúrio, onde será possível realizar operações CRUD na entidade `funcionarios`.

Minha intenção é que a entidade `funcionarios` possua os seguintes atributos:

- ID (Como Chave Primária)
- Nome
- CPF
- Telefone
- Email
- Data de Nascimento
- Cargo
- Data de Admissão

## Pré-requisitos

- Ter o [![Git](https://img.shields.io/chocolatey/v/git.svg?label=Git&logo=git&style=flat)](https://git-scm.com/downloads) instalado.

- Ter o [![Chocolatey](https://img.shields.io/chocolatey/v/nodejs-lts.svg?label=Node&logo=Nodedotjs&style=flat)](https://nodejs.org/pt-br/download/) instalado.

## Dependencias

- [![express](https://img.shields.io/github/package-json/dependency-version/vastier/Resilia-M4-Escola-Mercurio-API/express?logo=express)](https://www.npmjs.org/package/express)

- [![sqlite3](https://img.shields.io/github/package-json/dependency-version/vastier/Resilia-M4-Escola-Mercurio-API/sqlite3?logo=sqlite)](https://www.npmjs.org/package/sqlite3)

- [![joi](https://img.shields.io/github/package-json/dependency-version/vastier/Resilia-M4-Escola-Mercurio-API/joi?logo=sqlite)](https://www.npmjs.org/package/joi)

- [![@hapi/joi-date](https://img.shields.io/github/package-json/dependency-version/vastier/Resilia-M4-Escola-Mercurio-API/@hapi/joi-date?logo=sqlite)](https://www.npmjs.org/package/@hapi/joi-date)

- [![cpf-cnpj-validator](https://img.shields.io/github/package-json/dependency-version/vastier/Resilia-M4-Escola-Mercurio-API/cpf-cnpj-validator?logo=sqlite)](https://www.npmjs.org/package/cpf-cnpj-validator)

- [![joi-phone-number](https://img.shields.io/github/package-json/dependency-version/vastier/Resilia-M4-Escola-Mercurio-API/joi-phone-number?logo=sqlite)](https://www.npmjs.org/package/joi-phone-number)

### Dependencias de desenvolvimento

- [![nodemon](https://img.shields.io/github/package-json/dependency-version/vastier/Resilia-M4-Escola-Mercurio-API/dev/nodemon?logo=nodemon)](https://www.npmjs.org/package/nodemon)

## Instalando Localmente

Para instalar e rodar a API localmente, abra seu terminal/powershell e rode os seguintes comandos:

Para clonar o repositório:

```pwsh
git clone git@github.com:Vastier/Resilia-M4-Escola-Mercurio-API.git
```

Para entrar na pasta que acabou de ser criada:

```pwsh
cd Resilia-M4-Escola-Mercurio-API
```

Para instalar os pacotes necessários:

```node
npm install
```

Para iniciar o servidor da API:

```node
npm start
```

Para iniciar o servidor em modo de desenvolvimento (usando o nodemon para atualizar caso hajam mudanças nos arquivos):

```node
npm run dev
```

Caso tenha removido o arquivo database.db ou queira criar um e popular com dados de exemplo:

```node
npm run create
```

---

## Rotas implementadas

### Funcionários

- **GET `/funcionarios/todos`**

    Retorna todos os funcionários no banco de dados.

    Schema da resposta

    ```json
   {
    "erro": <Boolean>,
    "Lista dos Funcionários": [
        {
          "ID": <Int>,
          "NOME": <String>,
          "CPF": <String>,
          "TELEFONE": <String>,
          "EMAIL": <String>,
          "DATA_DE_NASCIMENTO": <String>,
          "CARGO": <String>,
          "DATA_DE_ADMISSAO": <String>
        },
      ]
    }

- **POST `/funcionarios/inserir`**

    Insere um funcionário no banco de dados.

    Dados a serem enviados via POST

    | Parâmetro | Descrição |
    |---|---|
    | `"nome"` | Nome do funcionário (string, obrigatório) |
    | `"cpf"` | CPF do funcionário (número de 11 digitos, obrigatório, aceita pontos e traços, deve ser um CPF válido e não cadastrado ainda) |
    | `"telefone"` | Telefone do candidato (número de telefone com DDD, obrigatório, aceita espaços, parênteses e traços) |
    | `"email"` | Email do funcionário (string, obrigatório, deve ser um email válido) |
    | `"dataDeNascimento"` | Data de Nascimento do funcionário (números no formato DD/MM/AAAA, opcional) |
    | `"cargo"` | Cargo do funcionário (string, obrigatório) |
    | `"dataDeAdmissao"` | Data de Admissão do funcionário (números no formato DD/MM/AAAA, opcional) |

    Exemplo de requisição:

    ```json
    {
        "nome": "Jão da Silva",
        "cpf": "836.799.020-00",
        "telefone": "(51) 99887-6432",
        "email": "jao.silva@example.com",
        "dataDeNascimento": "29/05/1980",
        "cargo": "Inspetor",
        "dataDeAdmissao": "05/03/2015"
    }
    ```

    Exemplo de resposta:

    ```json
    {
      "erro": false,
      "Resposta": "Funcionário de nome: 'Jão da Silva' adicionado ao banco de dados com sucesso."
    }
    ```
