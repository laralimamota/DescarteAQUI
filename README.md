# API de Descarte de Resíduos

## Objetivo

A API de Descarte de Resíduos foi desenvolvida para ajudar os usuários a localizar pontos de coleta para materiais recicláveis, eletrônicos e resíduos perigosos. O objetivo é promover a conscientização sobre o descarte correto de resíduos e contribuir para a sustentabilidade ambiental.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para o backend.
- **NestJS**: Framework para a construção da API.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados utilizado para armazenar informações sobre os pontos de coleta.
- **Sequelize**: ORM para interagir com o banco de dados PostgreSQL.
- **Git/GitHub**: Controle de versão e colaboração.
- **Railway**: Plataforma para o deploy da API.

## Aprendizados

Durante o desenvolvimento deste projeto, foram adquiridos conhecimentos sobre:

- Estruturação de APIs RESTful utilizando NestJS.
- Integração de banco de dados PostgreSQL com Sequelize.
- Implementação de padrões de repositório para acesso a dados.
- Documentação de APIs e boas práticas de desenvolvimento.


### Testando a API

A API pode ser testada utilizando ferramentas como Postman, Insomnia ou Curl. Abaixo estão as rotas disponíveis:

## Informações sobre as Rotas

### Pontos de Coleta

- **GET /pontos-coleta**
  - **Descrição**: Retorna todos os pontos de coleta.
  - **Resposta**: Lista de pontos de coleta.

- **GET /pontos-coleta/:id**
  - **Descrição**: Retorna um ponto de coleta específico pelo ID.
  - **Parâmetros**: `id` - ID do ponto de coleta.
  - **Resposta**: Objeto do ponto de coleta.

- **POST /pontos-coleta**
  - **Descrição**: Cria um novo ponto de coleta.
  - **Corpo da Requisição**: JSON com os dados do ponto de coleta.
  - **Resposta**: Objeto do ponto de coleta criado.

- **PUT /pontos-coleta/:id**
  - **Descrição**: Atualiza um ponto de coleta existente.
  - **Parâmetros**: `id` - ID do ponto de coleta.
  - **Corpo da Requisição**: JSON com os dados atualizados.
  - **Resposta**: Objeto do ponto de coleta atualizado.

- **DELETE /pontos-coleta/:id**
  - **Descrição**: Remove um ponto de coleta pelo ID.
  - **Parâmetros**: `id` - ID do ponto de coleta.
  - **Resposta**: Confirmação da remoção.

### Link da API no Railway

- **Link da API**: *Será disponibilizado após o deploy.*

<div style="display:flex; flex-direction:row">
<div align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</div>

<div align="center">
  <a href="http://nestjs.com/" target="blank"><img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="300"></a>
</div>
</div>