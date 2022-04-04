<p align="left">
  <img src="./src/assets/escola-mercurio-logo.png" alt="Logo da Escola Mercúrio" width="200px">
</p>

# Resilia M4 - T11 - API Escola Mercúrio - Entidade Funcionários

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

- Ter o [Git](https://git-scm.com/) instalado.

- Ter o [Node versão 16](https://nodejs.org/) instalado.

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

- **GET /funcionarios**

    Schema da resposta

    ```json
    {
  "listaDosFuncionarios": {
    "funcionarios": [
      {
        "ID": <Int>,
        "NOME": <String>,
        "CPF": <String>,
        "TELEFONE": <String>,
        "EMAIL": <String>,
        "DATA_DE_NASCIMENTO": <String>,
        "CARGO": <String>,
        "DATA_DE_ADMISSAO": <String>
      }
    ],
    "erro": <Boolean>
     }
   }
    ```
