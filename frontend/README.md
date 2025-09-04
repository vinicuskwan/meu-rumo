# Meu Rumo - Frontend

Este é o frontend do projeto "Meu Rumo", uma aplicação de gestão de finanças pessoais que utiliza inteligência artificial para ajudar os usuários a controlar e organizar seus gastos.

## Estrutura do Projeto

O frontend é construído utilizando React e possui a seguinte estrutura:

- **public/**: Contém arquivos estáticos, incluindo o `index.html` que é o ponto de entrada da aplicação.
- **src/**: Contém todos os arquivos fonte da aplicação.
  - **assets/**: Arquivos estáticos como imagens e fontes.
  - **components/**: Componentes reutilizáveis da aplicação, organizados por funcionalidade.
    - **Auth/**: Componentes relacionados à autenticação (Login, Registro, Recuperação de Senha).
    - **Dashboard/**: Componentes do painel financeiro (Painel Financeiro, Insights, Desafios, Gráficos).
    - **Profile/**: Configurações de perfil do usuário.
    - **Admin/**: Componentes para gerenciamento administrativo (Usuários, Pagamentos, Conteúdo, Métricas).
    - **Notifications.tsx**: Exibe notificações para o usuário.
    - **Shared/**: Componentes compartilhados como Cabeçalho, Rodapé e Alternador de Modo Escuro.
  - **pages/**: Páginas da aplicação, incluindo a página inicial, painel do usuário e painel administrativo.
  - **styles/**: Arquivos de estilo CSS para a aplicação.
  - **utils/**: Funções utilitárias para interações com a API e gerenciamento de autenticação.
  - **App.tsx**: Componente principal da aplicação.
  - **index.tsx**: Ponto de entrada da aplicação React.

## Instalação

Para instalar as dependências do projeto, execute:

```
npm install
```

## Execução

Para iniciar a aplicação em modo de desenvolvimento, execute:

```
npm start
```

A aplicação estará disponível em `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.