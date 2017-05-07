---
title: "Javascript Fundamentals - Objeto Math #1"
date: 2016-11-07 15:00:00
---

O objeto Math, como o próprio nome sugere, é responsável por oferecer métodos e propriedades do universo matemático. Algumas coisas são bem específicas para quem está fazendo cálculos complexos ou trabalhando com conceitos matemáticos avançados, não muito comuns no dia a dia. Por isso optei por não abordar tudo que a linguagem oferece e focar nos métodos que são mais utilizados.

`ceil()`, `floor()` e `round()`.

### ceil()

Método usado para **arredondar** um número para cima.

{% highlight js %}
var num = 41.25;

// The answer to life, the universe and everything
var answer = Math.ceil(num);

console.log(answer);
> 42
{% endhighlight %}

### floor()

Método usado para **arredondar** um número para baixo.

{% highlight js %}
var num = 42.87;

// The answer to life, the universe and everything...again.
var answer = Math.floor(num);

console.log(answer);
> 42
{% endhighlight %}

### round()

Método usado para **arredondar** um número.

{% highlight js %}
var num = 42.36;

// Última vez, prometo!
var answer = Math.round(num);

console.log(answer);
> 42
{% endhighlight %}

Diferente dos dois métodos anteriores, esse arredondará para o inteiro mais próximo. Sendo um pouco mais específico: `0.5` ou maior arredonda para cima e, se for menor que isso, o número é arredondado para baixo.

---

> _Esse post faz parte de uma série. Quer ver as outras postagens? [Clique aqui]({% post_url 2016-10-10-javascript-fundamentals %})._