# API de Ramen

Esta é uma API desenvolvida para gerenciar informações sobre ramen, incluindo tipos de proteínas, caldos e pedidos.

## Funcionalidades Principais

- **GET /proteins**: Retorna todos os tipos de proteínas disponíveis.
- **GET /broths**: Retorna todos os tipos de caldos disponíveis.
- **POST /orders**: Cria um novo pedido de ramen.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- MongoDB

## Conceitos Aplicados

Este projeto segue boas práticas de desenvolvimento de software, incluindo:

- **SOLID**: Princípios de design para tornar o software mais compreensível, flexível e fácil de manter.
- **Injeção de Dependência (Dependency Injection)**: Para facilitar a substituição de dependências e aumentar a modularidade.
- **Repository Pattern**: Para abstrair o acesso aos dados e melhorar a testabilidade do código.

## Variáveis de ambiente


Não esqueça de configurar as variáveis de ambiente conformeo examplo


### Deploy 

Você consegue acessar o deploy da aplicação nessa url

projeto-rv-production.up.railway.app

## Pré requisitos

[Git](https://git-scm.com)
[Docker](https://www.docker.com/products/docker-desktop/)
[Node.js](https://nodejs.org/en/). 

## Execução do projeto

Primeiramente escolha o local aonde você deseja armazenar o projeto, entre na pasta e execute o comando

$ git clone https://github.com/EnzoFBS/Projeto-RV.git

# Abra o docker

Com docker aberto abra o repositório e no terminal execute o comando

# Para instalar as dependencias do projeto
$ npm install


# Subir o container do banco de dados
$ docker-compose.yml up  

# Para abastecer o banco com os dados(seed) utilize

$ npm run dev:seed 

# Para executar a aplicação 
$ npm run start:dev


Agora no browser ou no postman entre na url <http://localhost:8000>







