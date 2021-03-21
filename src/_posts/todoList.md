---
title: "Desafio 01 do Ignite: Todo List"
description: "Neste tópico mostro como fazer uma todo list usando o conceito de programação funcional"
---

Na verdade não se faz

```javascript
setTasks(newTask)
```

porque dessa forma estamos alterando diretamente o valor do atributo, ferindo a regra de imutabilidade(e nao irá funcionar, é claro): o correto seria resgatar o valor do estado anterior e criar um novo estado (variável) com os valores atualizados, nisso se faz necessário utilizar o spread operator:

```javascript
setTasks(oldState => [...oldState, newTask]);
```
nesse exemplo aqui utilizamos uma função de callback para retornar o estado atualizado.


Esse comando funcional é que faz toda a "mágica":
```javascript
    const filteredTasks = tasks.filter(task => task.id !== id)
```

Na verdade aqui ele chama uma função na qual ele retorna um novo array da tasks tirando o que foi referenciado pelo id na parâmetro da função que foi chamado pelo ```onClick```


Para alterar o atributo ```IsComplete``` do array precisamos mapear o estado (array de tasks), buscar o id no qual vai ser passado por parâmetro pela função, alterar o atributo correspondente e atualizar o estado para que seja renderizado em tela: vamos lá!

```javascript
1 const updatedTasks = tasks.map(task => task.id === id ? {
2      ...task,
3      isComplete: !task.isComplete
4    } : task);
```
na linha 1 iremos invocar o ```tasks.map``` para percorrermos cada elemento da lista (array) e na linha 4 retornar ele para o estado, caso nao consigamos encontrar o id correspodente (o que é pouco provável XD).
Caso encontre (como mostrado na interrogação no final da linha 1) executamos uma chamada de outra função (callback) retornando aquela task, porém sobrescrevendo o atributo no qual pretendemos mexer, o ```isComplete``` invertendo seu valor negando-o na sua atribuição, como mostrado na linha 3.


...cometi uma gafe no que diz a alterar o valor de um elemento do array:

```javascript
1 const updatedTasks = tasks.filter(task => task.id === id ? {
2       ...task,
3       isComplete: !task.isComplete
4     } : task);
```
na linha 1 eu tentei utilizar o ```tasks.filter()``` porém isso não vai funcionar como deveria, pois essa função retorna um novo array, mas não aceita callback para alteração da mesma, como podemos ver [aqui](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

