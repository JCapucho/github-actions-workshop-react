# Repositório do projeto de React para o workshop de CI/CD do glua

Este repositório contêm o código do projeto de demonstração de uma codebase React
com integração e deployment contínuo através das github actions e github pages.

## Instruções de desenvolvimento

Primeiro é necessário instalar as dependências:

```bash
$ npm install
```

Para desenvolver utiliza-se os comandos normais:

```bash
$ npm run dev
```

E para dar build ao site final:

```bash
$ npm run build
```

## Workflows

A pasta `.github/workflows` contêm os workflows finais que correm no github.
Também existem versões intermediárias comentadas na pasta `workflows`.
