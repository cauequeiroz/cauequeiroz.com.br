---
title: "Resolvendo Problemas de Lógica #2"
date: 2016-12-06 14:00:00
---

## Introdução

Seu cérebro é a melhor ferramenta que você terá. Não importa o quanto você conheça da linguagem, programar é igual fazer um bolo: você pode ter todos os ingredientes na sua frente e ainda sim o bolo não será feito ao menos que você saiba como juntar tudo isso.

Desenvolver seu raciocínio lógico e sua capacidade de resolver problemas é, sem dúvidas nenhuma, um dos melhores investimentos que você pode fazer em você mesmo. É muito comum um desenvolvedor mais experiente olhar o código de algum projeto meu e sugerir uma refatoração específica no código. É incrível como, apesar de eu conhecer o mesmo javascript que ele, essa sugestão é algo que eu nunca teria pensado, algo muito mais enxuto, performático e incrível.

Caso você não conheça, existe um site chamado **CodeWars**. Ele oferece uma série de problemas separado por nível de dificuldade. Você vai ganhando experiência e subindo de nível conforme for resolvendo esses desafios! Você pode criar sua conta [clicando aqui](http://www.codewars.com/r/h2nQcA).

## Problema

Você mora na cidade de Cartesia, onde todas as estradas são dispostas em um _grid_ perfeito. Você chegou dez minutos mais cedo para uma consulta, então você decidiu aproveitar esse tempo e fazer uma breve caminhada. A cidade fornece aos seus cidadãos um _Walk Generating App_ em seus celulares - toda vez que você pressiona o botão o aplicativo te envia um array com as direções sugeridas para você seguir. Essas direções são representadas pelas letras `n` (north), `s` (south), `w` (west) e `e` (east). Você sabe que demora **um minuto** para seguir cada sugestão.

Crie uma função que retornará _true_ caso a caminhada que o aplicativo lhe sugerir dure exatamente **dez minutos** (você não quer se atrasar ou chegar cedo demais na consulta!) e, é claro, se as direções sugeridas te levarem de volta ao seu ponto de partida. Caso contrário, essa função deverá retornar _false_. [Teste sua solução](https://www.codewars.com/kata/take-a-ten-minute-walk/train/javascript).


## Solução

Tente resolver o desafio antes de continuar a leitura. Caso não tenha conseguido, sem problemas, a seguir você terá uma solução comentada do problema proposto! Estudar o raciocínio por trás de uma solução é uma ótima forma de se preparar para os próximos desafios. :)

O primeiro passo é entender completamente o problema que você precisará resolver. Conforme explicado no enunciado, vamos receber um array com algumas direções (representadas pelas letras `n`, `s`, `w` e `e`) e precisamos verificar se:

**1)** Seguindo essa sugestão, a caminhada dura exatamente **10 minutos**.  
**2)** Se essas direções propostas vão nos levar de volta para o ponto de partida.

Se essas duas condições forem verdadeiras, temos uma caminhada válida e podemos retornar _true_. Caso contrário, nossa função retornará _false_.

{% highlight js %}
function isValidWalk(walk) {
  
}
{% endhighlight %}

Verificar se a duração da caminhada será de 10 minutos é bem simples. Sabemos que cada direção dura 1 minuto para seguir, certo? Logo, basta verificarmos se recebemos exatamente 10 direções (10 direções * 1 minuto cada = 10 minutos):

{% highlight js %}
function isValidWalk(walk) {
    if ( walk.length === 10 ) {
        return true;
    } else {
        return false;
    }
}
{% endhighlight %}

Podemos escrever isso de uma forma um pouco mais enxuta, já que nossa condição já resulta em _true_ ou _false_:

{% highlight js %}
function isValidWalk(walk) {
    return walk.length === 10;
}
{% endhighlight %}

Agora precisamos saber se a caminhada proposta nos levará de volta ao ponto de partida. Existem diversas formas de se fazer isso, felizmente o problema pede a forma mais simples possível: se eu andei `x` para uma direção, preciso andar a mesma quantidade na direção oposta para retornar ao ponto de partida. O que isso quer dizer?

- Se eu dei um passo para a direita, preciso dar um passo para a esquerda para retornar.
- Se eu dei dois passos para o norte, preciso dar dois passos para o sul para retornar.
- Se eu comecei com `n-n-w` (north, north e west), preciso após isso andar `e-s-s` (east, south e south) para retornar.

Simples, não? Seguindo essa lógica, basta verificarmos se a quantidade de `n` sugerida é igual a de `s` e, de forma semelhante, se a quantidade de `w` sugerida é igual a de `e`. Se forem iguais, não importa qual seja o caminho, sempre retornaremos ao ponto de partida.

Na prática, vamos armazenar em variáveis a quantidade de cada direção e comparar se as direções opostas são iguais! Perfeito, vamos para o código então.

Podemos utilizar a função `filter()` para verificar quantas vezes determinada sugestão foi sugerida dentro de um array:

{% highlight js %}
var walk = ['n', 's', 'n', 'n', 'e', 'w'];

// Quantos 'n' temos nesse array?

// 1 - Vamos filtrar esse array e deixar
// apenas os itens 'n'
var n = walk.filter(function(item) {
    return item === 'n';
});

// 2 - O length desse novo array nos dirá
// quantos 'n' temos!
console.log( n.length );
> 3
{% endhighlight %}

Caso não saiba utilizar o método `filter()` ainda, eu escrevi sobre ele em um dos posts da série Javascript Fundamentals.

[Javascript Fundamentals - Objeto Array #5 (filter)]({% post_url 2016-10-17-javascript-fundamentals-objeto-array-5 %}#filter)

{% highlight js %}
function isValidWalk(walk) {
    var n = walk.filter(function(item) { return item === 'n' }).length;
    var s = walk.filter(function(item) { return item === 's' }).length;
    var w = walk.filter(function(item) { return item === 'w' }).length;
    var e = walk.filter(function(item) { return item === 'e' }).length;

    return walk.length === 10;
}
{% endhighlight %}

Podemos deixar isso um pouco mais organizado utilizando [arrow functions](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions)...

{% highlight js %}
function isValidWalk(walk) {
    var n = walk.filter((item) => item === 'n').length;
    var s = walk.filter((item) => item === 's').length;
    var w = walk.filter((item) => item === 'w').length;
    var e = walk.filter((item) => item === 'e').length;

    return walk.length === 10;
}
{% endhighlight %}

...e armazenando essas variáveis em um objeto!

{% highlight js %}
function isValidWalk(walk) {
    var dir = {
        'n': walk.filter((item) => item==='n').length,
        's': walk.filter((item) => item==='s').length,
        'w': walk.filter((item) => item==='w').length,
        'e': walk.filter((item) => item==='e').length
    };

    return walk.length === 10;
}
{% endhighlight %}

Estamos chegando no final desse problema. Vamos comparar as direções opostas agora:

{% highlight js %}
function isValidWalk(walk) {
    var dir = {
        'n': walk.filter((item) => item==='n').length,
        's': walk.filter((item) => item==='s').length,
        'w': walk.filter((item) => item==='w').length,
        'e': walk.filter((item) => item==='e').length
    };

    if ( dir['n'] === dir['s'] && dir['w'] === dir['e'] && walk.length === 10 ) {
        return true;
    } else {
        return false;
    }
}
{% endhighlight %}

Novamente, vamos deixar nossa condicional um pouco mais enxuta e finalizar a solução desse problema! :)

{% highlight js %}
function isValidWalk(walk) {  
  var dir = {
    'n': walk.filter((item) => item==='n').length,
    's': walk.filter((item) => item==='s').length,
    'w': walk.filter((item) => item==='w').length,
    'e': walk.filter((item) => item==='e').length
  }

  return dir['n'] === dir['s'] && dir['w'] === dir['e'] && walk.length === 10;
}
{% endhighlight %}

---

Como dito anteriormente, é bastante experimental esse formato de post. Seu feedback é muito importante para os próximos que vou escrever! Mais desafios? Menos? Que tal apenas um desafio com uma dificuldade maior? Deixe nos comentários o que achou e quais suas sugestões para os próximos.

Ah, não se esqueça de criar sua conta no [CodeWars](http://www.codewars.com/r/h2nQcA) e resolver esses e muitos outros desafios de programação. :)