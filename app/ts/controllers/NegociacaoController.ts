class NegociacaoController{

    private inputData: JQuery;
    private inputQuantidade: JQuery;
    private inputValor: JQuery;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');

    constructor(){

        this.inputData = $('#data');
        this.inputQuantidade = $('#quantidade');
        this.inputValor = $('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    adiciona(event: Event){

        event.preventDefault();

        const negociacao = new Negociacao(                      //Tudo que tem hifen vai ser trocado por virgula
                                new Date(this.inputData.val().replace(/-/g, ',')),
                                parseInt(this.inputQuantidade.val()),
                                parseFloat(this.inputValor.val()),
                                );

        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);

    }
}