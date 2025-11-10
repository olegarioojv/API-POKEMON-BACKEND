# 🎮 Pokémon API Backend# 🎮 Pokémon API Backend

Uma API REST desenvolvida com **Node.js**, **Express** e **Sequelize** para gerenciar Pokémons com suas pokébolas associadas. O projeto utiliza **MySQL** como banco de dados.Uma API REST desenvolvida com **Node.js**, **Express** e **Sequelize** para gerenciar dados de Pokémons, usuários e pokébolas. O projeto utiliza um banco de dados **MySQL** e autenticação baseada em tokens.

------


## 🎯 Visão Geral---

Esta API permite:## 📦 Requisitos

- ✅ Criar, ler, atualizar e deletar Pokémons

- ✅ Associar múltiplas pokébolas a cada Pokémon- **Node.js** v18.0.0 ou superior

- ✅ Criar usuários e fazer autenticação com email/senha- **npm** v8.0.0 ou superior

- ✅ Acessar endpoints protegidos com token de autenticação- **MySQL** v5.7 ou superior (ou MariaDB 10.3+)

- **.env** com variáveis de configuração do banco de dados

**Stack Tecnológico:**

- **Runtime:** Node.js---

- **Framework:** Express.js v5.1.0

- **ORM:** Sequelize v7.0.0 + MySQL## 🚀 Instalação

- **Segurança:** Bcrypt para hash de senhas

- **Tipo de Módulo:** ES Modules (ESM)### 1. Clone ou acesse o repositório



---```bash

cd c:\Projetos\API-POKEMON-BACKEND

## 📦 Requisitos```



- **Node.js** v18.0.0 ou superior### 2. Instale as dependências

- **npm** v8.0.0 ou superior

- **MySQL** v5.7 ou superior```bash

- **.env** com variáveis de configuraçãonpm install

```

---

### 3. Configure o arquivo `.env`

## 🚀 Instalação

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

### 1. Acesse o repositório

```env

```bashDB_HOST=localhost

cd c:\Projetos\API-POKEMON-BACKENDDB_USER=root

```DB_PASSWORD=sua_senha_aqui

DB_NAME=pokemon_db

### 2. Instale as dependênciasDB_PORT=3306

PORT=3000

```bash```

npm install

```### 4. Sincronize o banco de dados



### 3. Configure o arquivo `.env````bash

npm run db

Crie um arquivo `.env` na raiz do projeto:```



```envEste comando executa `src/model/index.js` e cria/sincroniza todas as tabelas automaticamente.

DB_HOST=localhost

DB_USER=root---

DB_PASSWORD=sua_senha_aqui

DB_NAME=pokemon_db## 🏗️ Estrutura do Projeto

DB_PORT=3306

PORT=3000```

```API-POKEMON-BACKEND/

├── src/

### 4. Sincronize o banco de dados│   ├── app.js                          # Configuração principal do Express

│   ├── config/

```bash│   │   └── database.js                 # Conexão Sequelize com MySQL

npm run db│   ├── controller/

```│   │   ├── pokemon/

│   │   │   └── pokemonController.js    # Lógica de roteamento para Pokémons

### 5. Inicie o servidor│   │   └── user/

│   │       └── userController.js       # Lógica de roteamento para Usuários

```bash│   ├── middleware/

npm run dev│   │   └── auth.js                     # Middleware de autenticação por token

```│   ├── model/

│   │   ├── index.js                    # Definição de relacionamentos

O servidor estará disponível em `http://localhost:3000`│   │   ├── pokemon/

│   │   │   └── Pokemon.js              # Modelo Sequelize de Pokémon

---│   │   ├── pokebolas/

│   │   │   └── Pokebolas.js            # Modelo Sequelize de Pokébola

## 🏗️ Estrutura do Projeto│   │   └── user/

│   │       └── User.js                 # Modelo Sequelize de Usuário

```│   ├── routers/

API-POKEMON-BACKEND/│   │   ├── pokemon/

├── src/│   │   │   └── pokemon.js              # Rotas de Pokémons

│   ├── app.js                          # Configuração do Express│   │   └── user/

│   ├── config/│   │       └── user.js                 # Rotas de Usuários

│   │   └── database.js                 # Conexão Sequelize com MySQL│   └── services/

│   ├── controller/│       ├── auth/

│   │   ├── pokemon/│       │   └── auth.js                 # Lógica de autenticação

│   │   │   └── pokemonController.js    # Controlador de Pokémons│       ├── pokebolas/

│   │   └── user/│       │   └── createPokebolas.js      # Serviço de criação de pokébolas

│   │       └── userController.js       # Controlador de Usuários│       └── pokemon/

│   ├── middleware/│           ├── createPokemon.js        # Serviço de criação de Pokémon

│   │   └── auth.js                     # Middleware de autenticação│           ├── destroyPokemon.js       # Serviço de deleção

│   ├── model/│           ├── getPokemon.js           # Serviço de busca por ID

│   │   ├── index.js                    # Definição de relacionamentos│           ├── getPokemons.js          # Serviço de listagem

│   │   ├── pokemon/│           └── updatePokemon.js        # Serviço de atualização

│   │   │   └── Pokemon.js              # Modelo de Pokémon├── scripts/

│   │   ├── pokebolas/│   └── testCreate.js                   # Script de teste (exemplo)

│   │   │   └── Pokebolas.js            # Modelo de Pokébola├── server.js                           # Arquivo de entrada da aplicação

│   │   └── user/├── package.json                        # Dependências do projeto

│   │       └── User.js                 # Modelo de Usuário├── backend.postman_collection.json     # Coleção Postman para testes

│   ├── routers/└── README.md                           # Este arquivo

│   │   ├── pokemon/

│   │   │   └── pokemon.js              # Rotas de Pokémons```

│   │   └── user/

│   │       └── user.js                 # Rotas de Usuários---

│   └── services/

│       ├── auth/## 🔌 Endpoints da API

│       │   └── auth.js                 # Serviço de autenticação

│       ├── pokebolas/### Pokémons

│       │   └── createPokebolas.js      # Serviço de pokébolas

│       └── pokemon/#### 📌 Criar Pokémon

│           ├── createPokemon.js        # Criar Pokémon

│           ├── destroyPokemon.js       # Deletar Pokémon**Endpoint:** `POST /pokemon`

│           ├── getPokemon.js           # Buscar por ID

│           ├── getPokemons.js          # Listar todos**Headers:**

│           └── updatePokemon.js        # Atualizar Pokémon```

├── scripts/x-api-key: seu_token_de_autenticacao

│   └── testCreate.js                   # Script de testeContent-Type: application/json

├── server.js                           # Arquivo de entrada```

├── package.json                        # Dependências

├── backend.postman_collection.json     # Coleção Postman**Body:**

└── README.md                           # Este arquivo```json

```{

  "name": "Pikachu",

---  "nature": "Elétrico",

  "tipo": "Elétrico",

## 🔌 Endpoints da API  "sexo": "Masculino",

  "level": 25,

### 🔐 Usuários (Sem autenticação)  "pokebolas": [

    "Poké Ball",

#### Criar Usuário    "Great Ball",

    "Ultra Ball"

**POST** `/user`  ]

}

**Body:**```

```json

{**Resposta (201):**

  "name": "João Silva",```json

  "email": "joao@example.com",{

  "password": "senha123"  "data": {

}    "id": 1,

```    "name": "Pikachu",

    "nature": "Elétrico",

**Resposta (201):**    "tipo": "Elétrico",

```json    "sexo": "Masculino",

{    "level": "25.000"

  "token": "abc123token..."  },

}  "pokebolas": {

```    "success": [

      { "id": 1, "pokebola": "Poké Ball", "PokemonId": 1 },

---      { "id": 2, "pokebola": "Great Ball", "PokemonId": 1 },

      { "id": 3, "pokebola": "Ultra Ball", "PokemonId": 1 }

#### Fazer Login    ],

    "error": []

**POST** `/auth`  }

}

**Body:**```

```json

{---

  "email": "joao@example.com",

  "password": "senha123"#### 📌 Obter Pokémon por ID

}

```**Endpoint:** `GET /pokemon/:id`



**Resposta (200):****Headers:**

```json```

{x-api-key: seu_token_de_autenticacao

  "message": "Autenticado com sucesso",```

  "token": "abc123token..."

}**Resposta (200):**

``````json

{

---  "data": {

    "id": 1,

### 🎮 Pokémons (Com autenticação)    "name": "Pikachu",

    "nature": "Elétrico",

**Header obrigatório em todas as requisições:**    "tipo": "Elétrico",

```    "sexo": "Masculino",

x-api-key: seu_token_aqui    "level": "25.000",

```    "Pokebolas": [

      { "id": 1, "pokebola": "Poké Ball", "PokemonId": 1 },

#### Criar Pokémon      { "id": 2, "pokebola": "Great Ball", "PokemonId": 1 }

    ]

**POST** `/pokemon`  }

}

**Body:**```

```json

{---

  "name": "Pikachu",

  "nature": "Elétrico",#### 📌 Listar Todos os Pokémons

  "tipo": "Elétrico",

  "sexo": "Masculino",**Endpoint:** `GET /pokemons`

  "level": 25,

  "pokebolas": ["Poké Ball", "Great Ball"]**Headers:**

}```

```x-api-key: seu_token_de_autenticacao

```

**Resposta (201):**

```json**Resposta (200):**

{```json

  "data": {{

    "id": 1,  "data": [

    "name": "Pikachu",    {

    "nature": "Elétrico",      "id": 1,

    "tipo": "Elétrico",      "name": "Pikachu",

    "sexo": "Masculino",      "nature": "Elétrico",

    "level": "25.000"      "tipo": "Elétrico",

  },      "sexo": "Masculino",

  "pokebolas": {      "level": "25.000",

    "success": [      "Pokebolas": [...]

      { "id": 1, "pokebola": "Poké Ball", "PokemonId": 1 },    }

      { "id": 2, "pokebola": "Great Ball", "PokemonId": 1 }  ]

    ],}

    "error": []```

  }

}---

```

#### 📌 Atualizar Pokémon

---

**Endpoint:** `PATCH /pokemon/:id`

#### Obter Pokémon por ID

**Headers:**

**GET** `/pokemon/:id````

x-api-key: seu_token_de_autenticacao

**Resposta (200):**Content-Type: application/json

```json```

{

  "data": {**Body:**

    "id": 1,```json

    "name": "Pikachu",{

    "nature": "Elétrico",  "name": "Pikachu Evoluído",

    "tipo": "Elétrico",  "level": 50

    "sexo": "Masculino",}

    "level": "25.000",```

    "Pokebolas": [

      { "id": 1, "pokebola": "Poké Ball", "PokemonId": 1 },**Resposta (200):**

      { "id": 2, "pokebola": "Great Ball", "PokemonId": 1 }```json

    ]{

  }  "message": "Pokemon atualizado com sucesso",

}  "pokemon": {

```    "id": 1,

    "name": "Pikachu Evoluído",

---    "level": "50.000",

    ...

#### Listar Todos os Pokémons  }

}

**GET** `/pokemons````



**Resposta (200):**---

```json

{#### 📌 Deletar Pokémon

  "data": [

    {**Endpoint:** `DELETE /pokemon/:id`

      "id": 1,

      "name": "Pikachu",**Headers:**

      "level": "25.000",```

      "Pokebolas": [...]x-api-key: seu_token_de_autenticacao

    }```

  ]

}**Resposta (200):**

``````json

{

---  "message": "Pokemon deletado com sucesso",

  "pokemon": 1

#### Atualizar Pokémon}

```

**PATCH** `/pokemon/:id`

---

**Body:**

```json### Usuários

{

  "level": 50,#### 📌 Criar Usuário

  "name": "Pikachu Evoluído"

}**Endpoint:** `POST /user/create`

```

**Body:**

**Resposta (200):**```json

```json{

{  "name": "João",

  "message": "Pokemon atualizado com sucesso",  "email": "joao@example.com",

  "pokemon": {  "password": "senha123"

    "id": 1,}

    "name": "Pikachu Evoluído",```

    "level": "50.000",

    ...**Resposta (201):**

  }```json

}{

```  "data": {

    "id": 1,

---    "name": "João",

    "email": "joao@example.com",

#### Deletar Pokémon    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

  }

**DELETE** `/pokemon/:id`}

```

**Resposta (200):**

```json---

{

  "message": "Pokemon deletado com sucesso",## 🗄️ Modelos de Dados

  "pokemon": 1

}### Pokémon

```

```javascript

---{

  id: Integer (PK),

## 🗄️ Modelos de Dados  name: String (NOT NULL),

  nature: String (NOT NULL),

### Pokemon  tipo: String (NOT NULL),

  sexo: String (NOT NULL),

```javascript  level: Decimal(10,3) (NOT NULL),

{  createdAt: Timestamp,

  id: Integer (PK),  updatedAt: Timestamp

  name: String (obrigatório),}

  nature: String (obrigatório),```

  tipo: String (obrigatório),

  sexo: String (obrigatório),**Relacionamento:** Um Pokémon tem muitas Pokébolas (`hasMany`)

  level: Decimal(10,3) (obrigatório),

  createdAt: Timestamp,---

  updatedAt: Timestamp

}### Pokébola

```

```javascript

**Relacionamento:** Um Pokémon pode ter muitas Pokébolas{

  id: Integer (PK),

---  pokebola: String (NOT NULL),

  PokemonId: Integer (FK),

### Pokebola  createdAt: Timestamp,

  updatedAt: Timestamp

```javascript}

{```

  id: Integer (PK),

  pokebola: String (obrigatório),**Relacionamento:** Uma Pokébola pertence a um Pokémon (`belongsTo`)

  PokemonId: Integer (FK),

  createdAt: Timestamp,---

  updatedAt: Timestamp

}### Usuário

```

```javascript

**Relacionamento:** Cada Pokébola pertence a um Pokémon{

  id: Integer (PK),

---  name: String (NOT NULL),

  email: String (UNIQUE, NOT NULL),

### User  password: String (NOT NULL - hasheada com bcrypt),

  token: String (UNIQUE),

```javascript  createdAt: Timestamp,

{  updatedAt: Timestamp

  id: Integer (PK),}

  name: String (obrigatório),```

  email: String (único, obrigatório),

  password: String (obrigatório, hasheado com bcrypt),---

  token: String (único, gerado automaticamente),

  createdAt: Timestamp,## 🔐 Autenticação

  updatedAt: Timestamp

}A API utiliza autenticação baseada em **tokens** (x-api-key).

```

### Como obter um token?

---

1. Crie um usuário via `POST /user/create`

## 🔐 Autenticação2. O token será retornado na resposta

3. Inclua o token em todas as requisições autenticadas:

A API utiliza um sistema de **token baseado em email/senha**.

```bash

### Fluxo:curl -H "x-api-key: seu_token" http://localhost:3000/pokemons

```

1. **Criar usuário** via `POST /user` ou **fazer login** via `POST /auth`

2. Receber um **token** na resposta### Middleware de Autenticação

3. Incluir o token em todas as requisições autenticadas usando o header `x-api-key`

Localizado em `src/middleware/auth.js`, verifica se o header `x-api-key` é válido consultando a tabela de usuários.

**Exemplo com cURL:**

```bash---

curl -H "x-api-key: seu_token" http://localhost:3000/pokemons

```## 📝 Scripts Disponíveis



**Exemplo com JavaScript:**### Desenvolvimento

```javascript

const token = "abc123token...";```bash

# Inicia o servidor em modo watch (recarrega automaticamente)

fetch('http://localhost:3000/pokemons', {npm run dev

  method: 'GET',```

  headers: {

    'x-api-key': token### Banco de Dados

  }

})```bash

  .then(res => res.json())# Sincroniza o banco de dados (cria/altera tabelas)

  .then(data => console.log(data))npm run db

  .catch(err => console.error(err));```

```

### Testes

---

```bash

## 📝 Scripts Disponíveis# Placeholder para testes

npm test

### Desenvolvimento```

```bash

npm run dev---

```

Inicia o servidor em modo watch (recarrega automaticamente)## 🌍 Variáveis de Ambiente



### Banco de DadosCrie um arquivo `.env` na raiz do projeto:

```bash

npm run db```env

```# Banco de Dados

Sincroniza as tabelas com o banco de dadosDB_HOST=localhost

DB_USER=root

### TestesDB_PASSWORD=senha_mysql

```bashDB_NAME=pokemon_db

npm testDB_PORT=3306

```

Placeholder para testes# Servidor

PORT=3000

---NODE_ENV=development

```

## 🌍 Variáveis de Ambiente

---

Arquivo `.env` na raiz do projeto:

## 💡 Exemplos de Uso

```env

# Banco de Dados### Exemplo 1: Criar um Pokémon com Pokébolas (cURL)

DB_HOST=localhost

DB_USER=root```bash

DB_PASSWORD=senha_mysqlcurl -X POST http://localhost:3000/pokemon \

DB_NAME=pokemon_db  -H "Content-Type: application/json" \

DB_PORT=3306  -H "x-api-key: seu_token" \

  -d '{

# Servidor    "name": "Charizard",

PORT=3000    "nature": "Fogo",

```    "tipo": "Fogo",

    "sexo": "Masculino",

---    "level": 36,

    "pokebolas": ["Poké Ball", "Master Ball"]

## 🐛 Troubleshooting  }'

```

### ❌ Pokébolas ficam null no banco

---

**Solução:** Certifique-se que o campo `pokebolas` no request é um array de strings:

```json### Exemplo 2: Listar Pokémons (JavaScript/Fetch)

{

  "pokebolas": ["Poké Ball", "Great Ball"]```javascript

}const token = "seu_token_aqui";

```

fetch('http://localhost:3000/pokemons', {

---  method: 'GET',

  headers: {

### ❌ Erro "você não está autorizado"    'x-api-key': token

  }

Verifique se o header `x-api-key` está correto:})

```bash  .then(res => res.json())

curl -H "x-api-key: seu_token_correto" http://localhost:3000/pokemons  .then(data => console.log(data.data))

```  .catch(err => console.error(err));

```

---

---

### ❌ Erro de conexão com MySQL

### Exemplo 3: Atualizar Pokémon

1. Verifique se MySQL está rodando

2. Confirme as credenciais no `.env````bash

3. Verifique se o banco de dados existecurl -X PATCH http://localhost:3000/pokemon/1 \

  -H "Content-Type: application/json" \

---  -H "x-api-key: seu_token" \

  -d '{

### ❌ Porta 3000 já está em uso    "level": 42

  }'

**Windows:**```

```bash

netstat -ano | findstr :3000---

taskkill /PID <PID> /F

```## 🐛 Troubleshooting



Ou use uma porta diferente no `.env`:### ❌ Pokébolas ficam null no banco de dados

```env

PORT=3001**Causa:** Mapeamento incorreto de campos no request body.

```

**Solução:** 

---- Certifique-se que o campo `pokebolas` é um array de strings ou objetos com propriedade `pokebola`

- Verifique se o middleware de JSON parsing está ativo (já está em `app.js`)

## 📚 Recursos Adicionais- Consulte `src/services/pokebolas/createPokebolas.js` para ver como os dados são normalizados



- **Postman Collection:** `backend.postman_collection.json`**Exemplo correto:**

- **Banco de Dados:** Sincronizar com `npm run db````json

- **Modo Desenvolvimento:** `npm run dev`{

  "pokebolas": ["Poké Ball", "Great Ball"]

---}

```

## ✍️ Autor

---

Desenvolvido por **olegarioojv**

### ❌ Erro "você não está autorizado"

---

**Causa:** Token inválido ou ausente no header `x-api-key`.

**Última atualização:** Novembro 2025

**Solução:**
1. Verifique se está incluindo o header `x-api-key` na requisição
2. Confirme que o token está correto (obtido ao criar usuário)
3. Verifique se o usuário ainda existe no banco de dados

---

### ❌ Erro de conexão com MySQL

**Causa:** Banco de dados não está rodando ou credenciais incorretas.

**Solução:**
1. Verifique se MySQL está rodando: `net start MySQL80` (Windows) ou `brew services start mysql` (macOS)
2. Confirme as credenciais no arquivo `.env`
3. Verifique se o banco existe: `mysql -u root -p` e execute `SHOW DATABASES;`

---

### ❌ Porta 3000 já está em uso

**Causa:** Outra aplicação está usando a porta 3000.

**Solução:**
```bash
# Windows: Encontre o processo usando a porta
netstat -ano | findstr :3000

# Finalize o processo (substitua PID)
taskkill /PID <PID> /F

# Ou use uma porta diferente no .env
PORT=3001
```

---

## 📚 Documentação Adicional

### Usar Postman

1. Importe o arquivo `backend.postman_collection.json` no Postman
2. Configure a variável `token` em Postman Environments
3. Teste os endpoints livremente

### Logs

- Erros de Pokébolas são logados em `console.error` ao criar Pokémons
- Ative logs do Sequelize modificando `src/config/database.js` e adicionando `logging: console`

---

## 🤝 Contribuindo

Para contribuir:

1. Crie uma branch para sua feature: `git checkout -b feature/sua-feature`
2. Commit suas mudanças: `git commit -m "Adiciona nova feature"`
3. Push para a branch: `git push origin feature/sua-feature`
4. Abra um Pull Request

---

## 📄 Licença

ISC

---

## ✍️ Autor

Desenvolvido por **olegarioojv**

---

**Última atualização:** Novembro 2025
