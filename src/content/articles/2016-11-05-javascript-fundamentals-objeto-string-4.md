---
title: "Javascript Fundamentals - Objeto String #4"
---

Chegamos no fim de mais um objeto da série Javascript Fundamentals! Finalizamos o objeto String com a conversa de hoje. Vamos aos últimos métodos então. :)

`substring()`, `slice()`, `search()` e `match()`.

### substring()

Método usado para **extrair** um trecho específico de uma string.

{% highlight js %}
var browser = 'Google Chrome';

// Extraindo apenas a palavra "Google"
var foo = browser.substring(0, 6);

console.log(foo);
> "Google"
{% endhighlight %}

O **primeiro parâmetro** é a posição que você deseja iniciar a captura. Se você passar um valor negativo, o javascript contará as posições do fim da string para o começo.

O **segundo parâmetro** é a posição que você deseja finalizar a captura. É preciso ficar atento, pois o resultado não inclui o caractere dessa posição. No nosso exemplo, a última letra da palavra "Google" fica na posição `5`. Porém, devido a esse detalhe, eu passei como parâmetro a posição `6`.


### slice()

Método usado para **extrair** um trecho específico de uma string.

{% highlight js %}
var browser = 'Google Chrome';

// Extraindo apenas a palavra "Google"
var foo = browser.slice(0, 6);

console.log(foo);
> "Google"
{% endhighlight %}

Seu funcionamento é bem semelhante ao método `substring()`. Passe como **primeiro parâmetro** a posição inicial do corte e como **segundo parâmetro** a posição final.

### search()

Usado para **procurar** algo em uma string com base em uma expressão regular.

{% highlight js %}
var nome = "Caue 1234 Queiroz";

// Qual posição tem algum número?
var check = nome.search(/[0-9]/);

console.log(check);
> 5
{% endhighlight %}

Passe como parâmetro uma expressão regular com o critério que você deseja buscar. O retorno desse método será a posição da primeira ocorrência encontrada.

Caso não seja encontrado nada na string, o retorno será `-1`.

### match()

Método usado para **procurar** algo em uma string com base em uma expressão regular.

{% highlight js %}
var nome = "Caue 1234 Queiroz";

// Quais os números nessa string?
var check = nome.match(/[0-9]/g);

console.log(check);
> ["1", "2", "3", "4"]
{% endhighlight %}

Diferente do `search()` que retorna a posição, o retorno desse método será um array com todas as ocorrências encontradas. Passe como parâmetro a expressão regular que deseja usar para fazer a busca.

---

> _Esse post faz parte de uma série. Quer ver as outras postagens? [Clique aqui]({% post_url 2016-10-10-javascript-fundamentals %})._