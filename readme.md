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

### Deploy 

Você consegue acessar o deploy da aplicação nessa url

projeto-rv-production.up.railway.app

## Variáveis de ambiente

Crie um arquivo .env com as seguintes variáveis
PORT= <NUMERO DA PORTA>
MONGODB_USERNAME=<USUARIO DO BANCO>
MONGODB_PASSWORD=<SENHADO BANCO DE DADOS>>
MONGODB_URL=mongodb+srv://root:1234@cluster0.gxatqvp.mongodb.net/mydatabase?retryWrites=true&w=majority
API_KEY="a4cace0da2584db0b0fd24787a77748b"
EXTERNAL_API_KEY="ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf"

