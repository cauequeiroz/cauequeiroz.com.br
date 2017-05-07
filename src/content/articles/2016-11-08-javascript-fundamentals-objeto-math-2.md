---
title: "Javascript Fundamentals - Objeto Math #2"
---

O objeto Math, como o próprio nome sugere, é responsável por oferecer métodos e propriedades do universo matemático. Algumas coisas são bem específicas para quem está fazendo cálculos complexos ou trabalhando com conceitos matemáticos avançados, não muito comuns no dia a dia. Por isso optei por não abordar tudo que a linguagem oferece e focar nos métodos que são mais utilizados.

`random()`, `max()` e `min()`.

### random()

Método usado para **gerar** um número aleatório entre `0` e `1`.

{% highlight js %}
var rand = Math.random();

console.log(rand);
> 0.5180834594573922
{% endhighlight %}

Você consegue, utilizando esse método, escrever funções que gerem números aleatórios entre **x** e **y**. Quer saber mais sobre isso? Escrevi um post bem bacana explicando todo o processo!

[Gerando um número aleatório entre x e y]({% post_url 2016-10-23-gerando-um-numero-aleatorio %});

### max()

Esse método retorna o **maior** número entre duas ou mais opções.

{% highlight js %}
var maior = Math.max(5, 4, 9, 1, 12, 8);

console.log(maior);
> 12
{% endhighlight %}

### min()

Esse método retorna o **menor** número entre duas ou mais opções.

{% highlight js %}
var menor = Math.min(5, 4, 9, 1, 12, 8);

console.log(menor);
> 1
{% endhighlight %}

Você também pode passar um array de números para os métodos `max()` e `min()`. Porém, se você tentar passar apenas o array, ambos os métodos retornarão `NaN`. Para que tudo funcione, adicione `...` antes do parâmetro:

{% highlight js %}
var notas = [50, 2, 100, 5, 5, 20];

// Qual é a maior nota?
var check = Math.max(...notas);

console.log(check);
> 100
{% endhighlight %}


---

> _Esse post faz parte de uma série. Quer ver as outras postagens? [Clique aqui]({% post_url 2016-10-10-javascript-fundamentals %})._