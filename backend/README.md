# Meu Rumo - Backend

## Visão Geral
O Meu Rumo é um sistema de gestão de finanças pessoais que utiliza inteligência artificial para ajudar os usuários a controlar e organizar seus gastos. Através de análises e insights gerados pela IA, o sistema propõe desafios financeiros e oferece recomendações personalizadas.

## Estrutura do Projeto
O backend é construído utilizando Node.js e TypeScript, com uma arquitetura modular que separa as responsabilidades em controladores, modelos, rotas, serviços e middlewares.

### Estrutura de Pastas
- **src/**: Contém o código-fonte da aplicação.
  - **controllers/**: Controladores que gerenciam a lógica de negócios.
  - **models/**: Modelos de dados que representam as entidades do sistema.
  - **routes/**: Definições de rotas da API.
  - **middlewares/**: Middlewares para autenticação e tratamento de erros.
  - **services/**: Serviços que encapsulam a lógica de interação com APIs externas e gerenciamento de dados.
  - **utils/**: Funções utilitárias para operações comuns.
  - **app.ts**: Ponto de entrada da aplicação.

### Dependências
As dependências do projeto estão listadas no arquivo `package.json`. Para instalar as dependências, execute:
```
npm install
```

### Configuração do Banco de Dados
O banco de dados é configurado utilizando MySQL. A estrutura do banco de dados pode ser encontrada no arquivo `schema.sql` dentro da pasta `database`.

### Execução do Projeto
Para iniciar o servidor, utilize o seguinte comando:
```
npm start
```

### Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

### Licença
Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.