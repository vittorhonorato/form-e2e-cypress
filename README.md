# Formulário de Login Angular com Testes E2E

Este projeto é uma implementação de formulário de login usando Angular, apresentando testes end-to-end com Cypress e um backend simulado usando JSON Server. O projeto demonstra as melhores práticas no manuseio de formulários, integração com HTTP client e testes automatizados.

## Tecnologias Utilizadas

- Angular 13.3.11
- Cypress para Testes E2E
- JSON Server para Backend Simulado
- Angular HttpClient para Integração com API
- TypeScript

## Funcionalidades

- Formulário de login com validação
- Integração com API REST usando Angular HttpClient
- Servidor backend simulado usando JSON Server
- Testes E2E abrangentes com Cypress
- Camada de serviço para comunicação com API

## Estrutura do Projeto

```
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── form/           # Componente do formulário de login
│   │   └── services/
│   │       └── form.service.ts  # Serviço de comunicação com API
├── cypress/
│   ├── e2e/                    # Arquivos de teste E2E
│   └── support/                # Arquivos de suporte do Cypress
└── db.json                     # Arquivo de banco de dados do JSON Server
```

## Como Começar

1. Instale as dependências:
```bash
npm install
```

2. Inicie o JSON Server (backend simulado):
```bash
npm run json-server
```

3. Inicie o servidor de desenvolvimento Angular:
```bash
ng serve
```

4. Abra a aplicação no seu navegador:
```
http://localhost:4200
```

## Executando os Testes

Para executar os testes E2E do Cypress:

```bash
npm run cypress:open
```

Isso abrirá o Test Runner do Cypress onde você pode executar testes individuais ou toda a suite de testes.

## Integração com API

O projeto usa o HttpClient do Angular para se comunicar com a API backend. O `FormService` gerencia todas as chamadas à API e está implementado em `src/app/services/form.service.ts`.

## Testes E2E

Os testes end-to-end são escritos usando Cypress e podem ser encontrados no diretório `cypress/e2e`. Os testes cobrem:

- Validação de formulário
- Cenários de login bem-sucedidos
- Tratamento de erros
- Testes de integração com API

## Notas de Desenvolvimento

- A aplicação usa JSON Server para simular uma API backend
- Todas as chamadas à API são abstraídas através de serviços
- Os testes E2E são organizados na estrutura recomendada pelo Cypress
- A validação de formulário é implementada usando os recursos nativos de validação do Angular

## Como Contribuir

1. Faça um fork do repositório
2. Crie sua branch de feature: `git checkout -b feature/minha-nova-funcionalidade`
3. Faça commit das suas alterações: `git commit -am 'Adiciona nova funcionalidade'`
4. Faça push para a branch: `git push origin feature/minha-nova-funcionalidade`
5. Envie um pull request
