---
title: "Montando meu blog pessoal, parte 1"
description: "Aqui eu darei um breve introdução sobre como fazer seu próprio blog."
---

## Fala dev, tudo beleza:

Aqui quem fala é o Maick Souza, conhecido como NearMaick, e aqui vou mostrar nessas série de posts como eu montei o meu blog pessoal.

### Create-next-app

Primeiramente subi uma instância já pronta do NextJS fazendo o:

`yarn create next-app 'nomeDoSeuApp'` para quem está utilizando o gerenciador de pacotes yarn

`npx create next-app 'nomeDoSeuApp'` para quem está utilizando o npm

### Tirar os arquivos desnecessários do projeto

Para organizar as pastas do projeto, principalmente das página e da estilização dos componentes eu gosto de seguir o seguinte: crio uma página `src` para definir os arquivos inerentes ao projeto.

[![Peek-08-12-2020-16-32.gif](https://i.postimg.cc/xCzy9NFG/Peek-08-12-2020-16-32.gif)](https://postimg.cc/jwRJX2TC)

![Web Page](http://localhost:3000/api/serve)


<figure>
  <iframe width="720" height="480" src="https://www.youtube.com/embed/_IedSanGvdg?loop=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

### Configurando um padrão de código no projeto

#### eslint
#### prettier

### Configurando as rotas dinâmicas

### Configurando o Styled Components

Eu, particularmente, prefiro usar essa lib para montar toda a estilização e organizar as folhas de estilo, pois este faz com que uma folha de uma página não interfira na outra, aravés do encapsulamento dos componentes.

`yarn add styled-components`
`yarn add @types/styled-components -D`

`yarn add babel-plugin-styled-components -D`
