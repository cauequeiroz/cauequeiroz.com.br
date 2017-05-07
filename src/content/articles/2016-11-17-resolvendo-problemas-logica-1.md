---
title: "Resolvendo Problemas de Lógica #1"
---

Ladies and gentlemen, hoje damos início a uma das séries que me motivaram a escrever esse blog! O formato é completamente experimental, não sei qual será a frequência das postagens, quantidade de problemas, dificuldade dos problemas e afins. A ideia é simplesmente começar e, aos poucos (e de acordo com o feedback de vocês <3), ir dando forma a isso.

Então, deixe um comentário falando o que achou desse formato e quais as suas sugestões para os próximos episódios!

## Introdução

Seu cérebro é a melhor ferramenta que você terá. Não importa o quanto você conheça da linguagem, programar é igual fazer um bolo: você pode ter todos os ingredientes na sua frente e ainda sim o bolo não será feito ao menos que você saiba como juntar tudo isso.

Desenvolver seu raciocínio lógico e sua capacidade de resolver problemas é, sem dúvidas nenhuma, um dos melhores investimentos que você pode fazer em você mesmo. É muito comum um desenvolvedor mais experiente olhar o código de algum projeto meu e sugerir uma refatoração específica no código. É incrível como, apesar de eu conhecer o mesmo javascript que ele, essa sugestão é algo que eu nunca teria pensado, algo muito mais enxuto, performático e incrível.

Caso você não conheça, existe um site chamado **CodeWars**. Ele oferece uma série de problemas separado por nível de dificuldade. Você vai ganhando experiência e subindo de nível conforme for resolvendo esses desafios! Você pode criar sua conta [clicando aqui](http://www.codewars.com/r/h2nQcA).

## Problemas

**1)** Crie uma função que verifique se um número é par ou ímpar. Ela deve receber um número inteiro como argumento e retornar _"Even"_ caso o número seja par ou _"Odd"_ caso o número seja ímpar. [Teste sua solução](https://www.codewars.com/kata/even-or-odd/train/javascript).

**2)** Crie uma função que some os dois menores números. Essa função receberá um array com pelo menos 4 números inteiros e positivos e deverá retornar a soma dos dois menores números. [Teste sua solução](https://www.codewars.com/kata/sum-of-two-lowest-positive-integers/train/javascript).

**3)** Crie uma função que filtre números. Essa função receberá um array com números, inteiros e positivos, e strings. O retorno dessa função deverá ser um array apenas com os números. [Teste sua solução](https://www.codewars.com/kata/list-filtering/train/javascript).

## Soluções

Tente resolver cada um dos desafios antes de continuar a leitura. Caso não tenha conseguido algum, sem problemas, a seguir você terá uma solução comentada de cada um deles! Estudar o raciocínio por trás de uma solução é uma ótima forma de se preparar para os próximos desafios. :)

### Problema 1

Crie uma função que verifique se um número é par ou ímpar. Ela deve receber um número inteiro como argumento e retornar “Even” caso o número seja par ou “Odd” caso o número seja ímpar.

Para início de conversa, vamos criar a função que conterá toda a lógica desse problema:

{% highlight js %}
function even_or_odd(number) {
  
}
{% endhighlight %}

Precisamos fazer uma verificação nesse `number` e, de acordo com o resultado, fazer a função retornar uma mensagem específica, vamos construir isso.

{% highlight js %}
function even_or_odd(number) {  
    if ( /* number é par? */ ) {
        return 'Even'; 
    } else {
        return 'Odd';
    }
}
{% endhighlight %}

Apesar desse problema ser extremamente simples, ele exige algum conhecimento prévio de matemática. Como sabemos se um número é par ou ímpar? Basicamente, todo número que for **divisível por 2** será par. Por outro lado, se ele não for divisível, será ímpar. Ser divisível implica em o **resto da divisão ser 0**.

O javascript possui um operador que vai nos ajudar bastante agora: `%`. Esse operador verifica quanto é o resto da divisão de um número pelo outro, exatamente o que precisamos! Vamos construir nossa condição e finalizar o desafio.

{% highlight js %}
function even_or_odd(number) {  
    if ( number % 2 === 0 ) {
        return 'Even'; 
    } else {
        return 'Odd';
    }
}
{% endhighlight %}

Se o resto da divisão de `number` por `2` for `0`, sabemos que ele é par. Caso contrário, nossa função retorna que ele é ímpar.

Uma solução ainda mais enxuta utilizando _condicionais ternários_ (`?:`) e o fato de que `0` é considerado `false` e qualquer outro número `true`:

{% highlight js %}
function even_or_odd(number) {  
    return number % 2 ? 'Odd' : 'Even';
}
{% endhighlight %}

### Problema 2

Crie uma função que some os dois menores números. Essa função receberá um array com pelo menos 4 números inteiros e positivos e deverá retornar a soma dos dois menores números.

Novamente, vamos criar a função que receberá esses números:

{% highlight js %}
function sumTwoSmallestNumbers(numbers) {  
  
};
{% endhighlight %}

É bem interessante pensarmos de uma forma um pouco mais abstrata antes de colocarmos a mão na massa. Para solucionar esse problema, precisamos apenas de dois passos:

**1.** Ordenar esse array de números **do menor para o maior**.  
**2.** Com ele ordenado, conseguimos a soma dos dois menores números simplesmente somando o número da **posição 0** com o número da **posição 1**. Afinal, esses são os dois menores números.

Perfeito, agora como traduzir isso para Javascript? Para ordenar o array podemos usar o método `sort()`. Caso nunca tenha ouvido falar, eu escrevi sobre ele em um dos artigos da série Javascript Fundamentals:

[Javascript Fundamentals - Objeto Array #2 (sort)]({% post_url 2016-10-12-javascript-fundamentals-objeto-array-2 %}#sort)

Aliás, nesse mesmo post temos um exemplo de uso do método `sort()` para ordenar números. Caso não entenda o que eu vou fazer a seguir, só conferir a explicação no post. :)

{% highlight js %}
function sumTwoSmallestNumbers(numbers) {

    // Ordenando os números do MENOR para o MAIOR
    var arr = numbers.sort(function(a, b){
        return a - b;
    });

}
{% endhighlight %}

Para finalizar, basta retornarmos a soma das duas primeiras posições desse array.

{% highlight js %}
function sumTwoSmallestNumbers(numbers) {

    // Ordenando os números do MENOR para o MAIOR
    var arr = numbers.sort(function(a, b){
        return a - b;
    });

    // Retornando a soma dos dois menores números
    return arr[0] + arr[1];

}
{% endhighlight %}

### Problema 3

Crie uma função que filtre números. Essa função receberá um array com números, inteiros e positivos, e strings. O retorno dessa função deverá ser um array apenas com os números.

Vamos a função que receberá esse array:

{% highlight js %}
function filter_list(list) {
  
}
{% endhighlight %}

Precisamos passar por cada item do array, verificar se ele é um número ou não e fazer a filtragem. Como podemos fazer isso? Utilizando o método `filter()`, claro! Caso nunca tenha usado, também escrevi sobre ele em um post da série Javascript Fundamentals.

[Javascript Fundamentals - Objeto Array #5 (filter)]({% post_url 2016-10-17-javascript-fundamentals-objeto-array-5 %}#filter)

Esse método retorna um novo array, vamos deixar nesse array apenas os elementos que forem do tipo `number`. Essa é uma verificaçao bem simples de se fazer utilizando o operador `typeof`.

{% highlight js %}
function filter_list(list) {

    // Gerando um array apenas com elementos do tipo 'number'
    var numbers = list.filter(function(elem) {
        return typeof elem === 'number';
    });

}
{% endhighlight %}

Por fim, basta retornarmos esse novo array.

{% highlight js %}
function filter_list(list) {

    // Gerando um array apenas com elementos do tipo 'number'
    var numbers = list.filter(function(elem) {
        return typeof elem === 'number';
    });

    return numbers;

}
{% endhighlight %}

Caso queira escrever utilizando algumas features do _es6_ como `const` e `arrow functions`, a solução será a seguinte:

{% highlight js %}
const filter_list = list => list.filter(elem => typeof elem === 'number');
{% endhighlight %}

---

Como dito no início, é bastante experimental esse formato de post. Seu feedback é muito importante para os próximos que vou escrever! Mais desafios? Menos? Que tal apenas um desafio com uma dificuldade maior? Deixe nos comentários o que achou e quais suas sugestões para os próximos.

Ah, não se esqueça de criar sua conta no [CodeWars](http://www.codewars.com/r/h2nQcA) e resolver esses e muitos outros desafios de programação. :)