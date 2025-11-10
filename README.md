# 🎮 Pokémon API Backend

Uma API REST desenvolvida com **Node.js**, **Express** e **Sequelize** para gerenciar dados de Pokémons, usuários e pokébolas. O projeto utiliza um banco de dados **MySQL** e autenticação baseada em tokens.

---

## 🎯 Visão Geral

Esta API permite:

- ✅ Criar, ler, atualizar e deletar Pokémons
- ✅ Associar múltiplas pokébolas a cada Pokémon
- ✅ Criar usuários e fazer autenticação com email/senha
- ✅ Acessar endpoints protegidos com token de autenticação

**Stack Tecnológico:**

- **Runtime:** Node.js
- **Framework:** Express.js v5.1.0
- **ORM:** Sequelize v7.0.0 + MySQL
- **Segurança:** Bcrypt para hash de senhas
- **Tipo de Módulo:** ES Modules (ESM)

---

## 📦 Requisitos

- **Node.js** v18.0.0 ou superior
- **npm** v8.0.0 ou superior
- **MySQL** v5.7 ou superior (ou MariaDB 10.3+)
- **.env** com variáveis de configuração do banco de dados

---

## 🚀 Instalação

### 1. Clone ou acesse o repositório

```bash
cd c:\Projetos\API-POKEMON-BACKEND
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o arquivo `.env`

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha_aqui
DB_NAME=pokemon_db
DB_PORT=3306
PORT=3000
```

### 4. Sincronize o banco de dados

```bash
npm run db
```

Este comando executa `src/model/index.js` e cria/sincroniza todas as tabelas automaticamente.

### 5. Inicie o servidor

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3000`

---

## 🏗️ Estrutura do Projeto

```
API-POKEMON-BACKEND/
├── src/
│   ├── app.js                          # Configuração principal do Express
│   ├── config/
│   │   └── database.js                 # Conexão Sequelize com MySQL
│   ├── controller/
│   │   ├── pokemon/
│   │   │   └── pokemonController.js    # Lógica de roteamento para Pokémons
│   │   └── user/
│   │       └── userController.js       # Lógica de roteamento para Usuários
│   ├── middleware/
│   │   └── auth.js                     # Middleware de autenticação por token
│   ├── model/
│   │   ├── index.js                    # Definição de relacionamentos
│   │   ├── pokemon/
│   │   │   └── Pokemon.js              # Modelo Sequelize de Pokémon
│   │   ├── pokebolas/
│   │   │   └── Pokebolas.js            # Modelo Sequelize de Pokébola
│   │   └── user/
│   │       └── User.js                 # Modelo Sequelize de Usuário
│   ├── routers/
│   │   ├── pokemon/
│   │   │   └── pokemon.js              # Rotas de Pokémons
│   │   └── user/
│   │       └── user.js                 # Rotas de Usuários
│   └── services/
│       ├── auth/
│       │   └── auth.js                 # Lógica de autenticação
│       ├── pokebolas/
│       │   └── createPokebolas.js      # Serviço de criação de pokébolas
│       └── pokemon/
│           ├── createPokemon.js        # Serviço de criação de Pokémon
│           ├── destroyPokemon.js       # Serviço de deleção
│           ├── getPokemon.js           # Serviço de busca por ID
│           ├── getPokemons.js          # Serviço de listagem
│           └── updatePokemon.js        # Serviço de atualização
├── scripts/
│   └── testCreate.js                   # Script de teste (exemplo)
├── server.js                           # Arquivo de entrada da aplicação
├── package.json                        # Dependências do projeto
├── backend.postman_collection.json     # Coleção Postman para testes
└── README.md                           # Este arquivo
```

---

## 🔌 Endpoints da API

### 🔐 Usuários (Sem autenticação)

#### Criar Usuário

**POST** `/user/create`

**Body:**
```json
{
  "name": "João Silva",
  "email": "joao@example.com",
  "password": "senha123"
}
```

**Resposta (201):**
```json
{
  "data": {
    "id": 1,
    "name": "João Silva",
    "email": "joao@example.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

---

#### Fazer Login

**POST** `/auth`

**Body:**
```json
{
  "email": "joao@example.com",
  "password": "senha123"
}
```

**Resposta (200):**
```json
{
  "message": "Autenticado com sucesso",
  "token": "abc123token..."
}
```

---

### 🎮 Pokémons (Com autenticação)

**Header obrigatório em todas as requisições:**
```
x-api-key: seu_token_aqui
```

#### Criar Pokémon

**POST** `/pokemon`

**Headers:**
```
x-api-key: seu_token_de_autenticacao
Content-Type: application/json
```

**Body:**
```json
{
  "name": "Pikachu",
  "nature": "Elétrico",
  "tipo": "Elétrico",
  "sexo": "Masculino",
  "level": 25,
  "pokebolas": [
    "Poké Ball",
    "Great Ball",
    "Ultra Ball"
  ]
}
```

**Resposta (201):**
```json
{
  "data": {
    "id": 1,
    "name": "Pikachu",
    "nature": "Elétrico",
    "tipo": "Elétrico",
    "sexo": "Masculino",
    "level": "25.000"
  },
  "pokebolas": {
    "success": [
      { "id": 1, "pokebola": "Poké Ball", "PokemonId": 1 },
      { "id": 2, "pokebola": "Great Ball", "PokemonId": 1 },
      { "id": 3, "pokebola": "Ultra Ball", "PokemonId": 1 }
    ],
    "error": []
  }
}
```

---

#### Obter Pokémon por ID

**GET** `/pokemon/:id`

**Headers:**
```
x-api-key: seu_token_de_autenticacao
```

**Resposta (200):**
```json
{
  "data": {
    "id": 1,
    "name": "Pikachu",
    "nature": "Elétrico",
    "tipo": "Elétrico",
    "sexo": "Masculino",
    "level": "25.000",
    "Pokebolas": [
      { "id": 1, "pokebola": "Poké Ball", "PokemonId": 1 },
      { "id": 2, "pokebola": "Great Ball", "PokemonId": 1 }
    ]
  }
}
```

---

#### Listar Todos os Pokémons

**GET** `/pokemons`

**Headers:**
```
x-api-key: seu_token_de_autenticacao
```

**Resposta (200):**
```json
{
  "data": [
    {
      "id": 1,
      "name": "Pikachu",
      "nature": "Elétrico",
      "tipo": "Elétrico",
      "sexo": "Masculino",
      "level": "25.000",
      "Pokebolas": [...]
    }
  ]
}
```

---

#### Atualizar Pokémon

**PATCH** `/pokemon/:id`

**Headers:**
```
x-api-key: seu_token_de_autenticacao
Content-Type: application/json
```

**Body:**
```json
{
  "name": "Pikachu Evoluído",
  "level": 50
}
```

**Resposta (200):**
```json
{
  "message": "Pokemon atualizado com sucesso",
  "pokemon": {
    "id": 1,
    "name": "Pikachu Evoluído",
    "level": "50.000",
    ...
  }
}
```

---

#### Deletar Pokémon

**DELETE** `/pokemon/:id`

**Headers:**
```
x-api-key: seu_token_de_autenticacao
```

**Resposta (200):**
```json
{
  "message": "Pokemon deletado com sucesso",
  "pokemon": 1
}
```

---

## 🗄️ Modelos de Dados

### Pokémon

```javascript
{
  id: Integer (PK),
  name: String (NOT NULL),
  nature: String (NOT NULL),
  tipo: String (NOT NULL),
  sexo: String (NOT NULL),
  level: Decimal(10,3) (NOT NULL),
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

**Relacionamento:** Um Pokémon tem muitas Pokébolas (`hasMany`)

---

### Pokébola

```javascript
{
  id: Integer (PK),
  pokebola: String (NOT NULL),
  PokemonId: Integer (FK),
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

**Relacionamento:** Uma Pokébola pertence a um Pokémon (`belongsTo`)

---

### Usuário

```javascript
{
  id: Integer (PK),
  name: String (NOT NULL),
  email: String (UNIQUE, NOT NULL),
  password: String (NOT NULL - hasheada com bcrypt),
  token: String (UNIQUE),
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

---

## 🔐 Autenticação

A API utiliza autenticação baseada em **tokens** (x-api-key).

### Como obter um token?

1. Crie um usuário via `POST /user/create`
2. O token será retornado na resposta
3. Inclua o token em todas as requisições autenticadas:

```bash
curl -H "x-api-key: seu_token" http://localhost:3000/pokemons
```

### Middleware de Autenticação

Localizado em `src/middleware/auth.js`, verifica se o header `x-api-key` é válido consultando a tabela de usuários.

---

## 📝 Scripts Disponíveis

### Desenvolvimento

```bash
# Inicia o servidor em modo watch (recarrega automaticamente)
npm run dev
```

### Banco de Dados

```bash
# Sincroniza o banco de dados (cria/altera tabelas)
npm run db
```

### Testes

```bash
# Placeholder para testes
npm test
```

---

## 🌍 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Banco de Dados
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=senha_mysql
DB_NAME=pokemon_db
DB_PORT=3306

# Servidor
PORT=3000
NODE_ENV=development
```

---

## 💡 Exemplos de Uso

### Exemplo 1: Criar um Pokémon com Pokébolas (cURL)

```bash
curl -X POST http://localhost:3000/pokemon \
  -H "Content-Type: application/json" \
  -H "x-api-key: seu_token" \
  -d '{
    "name": "Charizard",
    "nature": "Fogo",
    "tipo": "Fogo",
    "sexo": "Masculino",
    "level": 36,
    "pokebolas": ["Poké Ball", "Master Ball"]
  }'
```

---

### Exemplo 2: Listar Pokémons (JavaScript/Fetch)

```javascript
const token = "seu_token_aqui";

fetch('http://localhost:3000/pokemons', {
  method: 'GET',
  headers: {
    'x-api-key': token
  }
})

---

### Exemplo 3: Atualizar Pokémon

```bash
curl -X PATCH http://localhost:3000/pokemon/1 \
  -H "Content-Type: application/json" \
  -H "x-api-key: seu_token" \
  -d '{
    "level": 42
  }'
```

---

## 🐛 Troubleshooting

### ❌ Pokébolas ficam null no banco de dados

**Causa:** Mapeamento incorreto de campos no request body.

**Solução:**
- Certifique-se que o campo `pokebolas` é um array de strings ou objetos com propriedade `pokebola`
- Verifique se o middleware de JSON parsing está ativo (já está em `app.js`)
- Consulte `src/services/pokebolas/createPokebolas.js` para ver como os dados são normalizados

**Exemplo correto:**
```json
{
  "pokebolas": ["Poké Ball", "Great Ball"]
}
```

---

### ❌ Erro "você não está autorizado"

**Causa:** Token inválido ou ausente no header `x-api-key`.

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