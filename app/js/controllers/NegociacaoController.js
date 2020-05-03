class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.inputData = $('#data');
        this.inputQuantidade = $('#quantidade');
        this.inputValor = $('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(//Tudo que tem hifen vai ser trocado por virgula
        new Date(this.inputData.val().replace(/-/g, ',')), parseInt(this.inputQuantidade.val()), parseFloat(this.inputValor.val()));
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
    }
}
