---
title: "Montando meu blog pessoal, parte 1"
description: "Aqui eu darei um breve introdução sobre como fazer seu próprio blog."
---

![Blaze Fielding](https://cdn.discordapp.com/attachments/350422457511051296/706633032370487357/869147ed3ed271ce8419d25d960ffc36.png)


# Fala dev, tudo beleza:

Aqui quem fala é o Maick Souza, conhecido como NearMaick, e aqui vou mostrar nessas série de posts como eu montei o meu blog pessoal.

## Create-next-app

Primeiramente subi uma instância já pronta do NextJS fazendo o:

`yarn create next-app 'nomeDoSeuApp'` para quem está utilizando o gerenciador de pacotes yarn

`npx create next-app 'nomeDoSeuApp'` para quem está utilizando o npm

## Tirar os arquivos desnecessários do projeto

Para organizar as pastas do projeto, principalmente das página e da estilização dos componentes eu gosto de seguir o seguinte: crio uma página `src` para definir os arquivos inerentes ao projeto.

## Configurando um padrão de código no projeto

Até para facilitar o desenvolvimento desse projeto, resolvi, antes de começar o desenvolvimento em si, configurar os padrões de projeto, começando pelo:

### eslint

Aqui primeiramente vou instalar a principalm dependência que, óbvio, é o eslint:

`yarn add eslint -D`

sendo que o `-D` sinaliza ao gerenciador que se trata de uma dependência de desenvolvimento pois esta não há necessidade de ser instalada nas dependências do projeto principal.

`yarn eslint --init`

#### `How would you like to use ESLint?`
#### `To check syntax, find problems, and enforce code style`

Aqui serve para verificar a sintaxe, buscar possíveis erros de digitação, e forçar o padrão de código, é muito útil para deixar o código limpo e legível para os demais devs:

#### `? What type of modules does your project use?`
#### `▸ JavaScript modules (import/export)`

No Typescript, o ECMA Script 2018 já tem o import/export definido por padrão.

#### ? Which framework does your project use? …
#### ▸ React

#### ? Does your project use TypeScript? ‣ Yes


#### ? Where does your code run? …  (Press <space> to select, <a> to toggle all, <i> to invert selection)
#### ✔ Browser
#### ✔ Node

Como o NextJS utiliza tanto um servidor back-end node quando o browser para renderizar as páginas, deve-se marcar ambos utilizando espaço.

#### ? How would you like to define a style for your project? …
#### ▸ Use a popular style guide

#### ? Which style guide do you want to follow? …
#### ▸ Standard: https://github.com/standard/standard

Aqui vamos selecionar uma guia de estilo que irá padronizar o código do nosso projeto, eu particularmente prefiro utilizar o padrão da AirBnb, mas por algum motivo (seja de atualização ou incompatibilidade mesmo) acabei optando poelo padrão standard.

#### ? What format do you want your config file to be in? …
#### ▸ JSON

Esse formato irá facilitar um pouco a sua leitura, bem como reconhecimento no editor de código.



### prettier

## Configurando as rotas dinâmicas

## Configurando o Styled Components

Eu, particularmente, prefiro usar essa lib para montar toda a estilização e organizar as folhas de estilo, pois este faz com que uma folha de uma página não interfira na outra, aravés do encapsulamento dos componentes.

`yarn add styled-components`
`yarn add @types/styled-components -D`

`yarn add babel-plugin-styled-components -D`
