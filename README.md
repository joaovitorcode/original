## Original Project

Este projeto NÃO é uma cópia de tutoriais do youtube, é um projeto - como o próprio nome diz - original. O Original Project é uma plataforma de perguntas e respostas semelhante a uma rede social, ele tem por objetivo mostrar os principais conhecimentos do autor ([@joaovitorcode](https://github.com/joaovitorcode)) e comprovar a sua experiencia em programação.

## Tecnologias utilizadas

- TypeScript
- ReactJS
- NextJS
- Tailwind
- ESLint
- Prettier
- Editor Config
- Husky
- Commitlint
- Commitizen
- MongoDB
- Axios

## Serviços utilizados

- Firebase (authentication)
- MongoDB Atlas

## Setup

- Para instalar o projeto:

```
git clone git@github.com:joaovitorcode/original.git
npm i
```

- Crie um projeto no firebase
- Dentro desse projeto crie um app para a web
- Obtenha a Configuração do SDK do app para a web
- Cole essa configuração dentro do arquivo _firebase.ts_ localizado na lib
- Habilite o serviço _authentication_ utilizando o provedor do Google
- Crie um cluster no mongodb atlas

## Como funciona

- Qualquer usuário poderar acessar os dados públicos (tópicos, respostas, perfis, etc.)
- Mas apenas usuários cadastrados poderão criar, atualizar e excluír dados

## Prints
### Homepage
![print da homepage](https://github.com/joaovitorcode/original/blob/main/public/homepage.png)

### Profile
![print da página de perfil](https://github.com/joaovitorcode/original/blob/main/public/profile.png)

### Danger
![print da página danger](https://github.com/joaovitorcode/original/blob/main/public/danger.png)

### Topic
![print da página de tópico](https://github.com/joaovitorcode/original/blob/main/public/topic.png)

### New Topioc
![print da página de novo tópico](https://github.com/joaovitorcode/original/blob/main/public/new_topic.png)

## Versão

0.1.0

## Autor

- **J Vitor F**: [@joaovitorcode](https://github.com/joaovitorcode)
