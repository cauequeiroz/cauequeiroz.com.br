---
title: "Jogo da Vida, de John Conway"
---

Estava lendo o blog do Marco Gomes quando encontrei algo que foi, de longe, uma das coisas mais divertidas que já programei: [O Jogo da Vida](http://marcogomes.com/blog/2008/o-jogo-da-vida-de-john-conway/).

Basicamente, você tem um ambiente populado com células. Essas células são programadas com algumas regras criadas pelo matemático britânico John Conway. É como se você ensinasse como elas devem se comportar ao longo de suas vidas, sabe? Com todos os ingredientes na panela, você fecha a tampa e assiste esse ambiente se desenvolvendo e ganhando complexidade (ou não).

As regras são bem simples:

- Qualquer célula viva com menos de dois vizinhos vivos morre de solidão.
- Qualquer célula viva com mais de três vizinhos vivos morre de superpopulação.
- Qualquer célula morta com exatamente três vizinhos vivos se torna uma célula viva.
- Qualquer célula viva com dois ou três vizinhos vivos continua no mesmo estado para a próxima geração.

É incrível ver ambientes extremamente complexos sendo gerados com apenas essas quatro regras! Olha [esse vídeo](https://youtu.be/C2vgICfQawE?t=1m2s) e fique alguns minutos de boca aberta comigo.

Além de divertido, esse tipo de algorítimo é bastante útil e tem aplicação em diversas áreas da ciência. Você pode saber um poucos mais [clicando aqui](https://pt.wikipedia.org/wiki/Jogo_da_vida).

Fiz uma implementação bem simples desse jogo. Você pode conferir [clicando aqui](http://cauequeiroz.com.br/game-of-life/) e ver o código no Github [aqui](https://github.com/cauequeiroz/game-of-life).

A ideia desse post é, além de apresentar para vocês esse autômato celular, comentar um pouco sobre como foi essa implementação. Não será um tutorial nem nada do tipo, quero apenas explicar como foi meu raciocínio durante a criação e mostrar alguns códigos. :)

## Código

Para início de conversa, resolvi usar um array multidimensional para representar o board. 

{% highlight js %}
this.board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0]
];
{% endhighlight %}

Acho que essa é a forma mais simples de controlar o board e fazer as verificações necessárias. Enquanto `0` representa uma célula morta, `1` representa as células vivas.

Em um primeiro momento, eu preciso gerar esse board com base no que o usuário desenhou no grid exibido na tela. Para isso, nada como um loop percorrendo o html da página e montando esse array de acordo com o que ele encontrar desenhado:

{% highlight js %}
generateBoard: function() {
    var grid  = UI.$grid,
        board = [];
        line  = [];

    for ( var i=0; i<20; i++ ) {
        for ( var j=0; j<20; j++ ) {
            var elem = grid.querySelectorAll('.row')[i]
                           .querySelectorAll('.col')[j];

            line.push(elem.classList.contains('live') ? '1' : '0');
        }

        board.push(line);
        line = [];
    }

    this.board = board;
}
{% endhighlight %}

Para gerar o próximo board, eu percorro cada item desse array verificando seus vizinhos. Assim eu consigo definir, de acordo com o número de vizinhos vivos (e as regras do John Conway), o estado dessa célula na próxima geração.

Essa é a função que percorre os itens...

{% highlight js %}
generateNextBoard: function() {
    var board     = this.board,
        nextBoard = [],
        line      = [];

    for ( var i=0; i<20; i++ ) {
        for ( var j=0; j<20; j++ ) {
            line.push(this.checkNeighbors(i, j) ? '1' : '0');
        }

        nextBoard.push(line);
        line = [];
    }

    this.board = nextBoard;
    UI.updateGrid();
}
{% endhighlight %}

...e essas as que fazem a verificação.

{% highlight js %}
checkNeighbors: function(row, col) {
    var board = this.board,
        cell  = board[row][col],
        ref   = [row, col];
        neighbors = [];

    neighbors.push(
        this.getNeighbor(ref, 'top', 'left'),
        this.getNeighbor(ref, 'top', 'center'),
        this.getNeighbor(ref, 'top', 'right'),
        this.getNeighbor(ref, 'center', 'left'),
        this.getNeighbor(ref, 'center', 'right'),
        this.getNeighbor(ref, 'bottom', 'left'),
        this.getNeighbor(ref, 'bottom', 'center'),
        this.getNeighbor(ref, 'bottom', 'right')
    );

    neighbors = neighbors.filter(function(elem) {
        return elem === '1';
    }).length;

    // Regras do Conway extremamente resumidas
    return (cell === '1')
        ? (neighbors < 2 || neighbors > 3) ? false : true
        : (neighbors === 3);
},

getNeighbor: function(ref, y, x) {
    var board = this.board,
        row = {
            'top': ref[0]-1,
            'center': ref[0],
            'bottom': ref[0]+1
        },
        col = {
            'left': ref[1]-1,
            'center': ref[1],
            'right': ref[1]+1
        };

    return board[row[y]] !== undefined ? board[row[y]][col[x]] : '0';
}
{% endhighlight %}

---

É isso. Você pode conferir no meu Github as demais nuances do projeto, como atualizar o grid da tela com base nesse board.

Essas quatro funções são o _core_ da aplicação e representam toda a lógica necessária para o funcionamento desse autômato. Tem alguma sugestão para otimizar esse código ou algum raciocínio diferente? Fica a vontade para comentar aqui e enviar um pull request lá no projeto! 
