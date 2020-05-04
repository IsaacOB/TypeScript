System.register(["../views/NegociacoesView", "../models/Negociacoes", "../models/Negociacao"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NegociacoesView_1, Negociacoes_1, Negociacao_1, NegociacaoController;
    return {
        setters: [
            function (NegociacoesView_1_1) {
                NegociacoesView_1 = NegociacoesView_1_1;
            },
            function (Negociacoes_1_1) {
                Negociacoes_1 = Negociacoes_1_1;
            },
            function (Negociacao_1_1) {
                Negociacao_1 = Negociacao_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this.negociacoes = new Negociacoes_1.Negociacoes();
                    this.negociacoesView = new NegociacoesView_1.NegociacoesView('#negociacoesView');
                    this.inputData = $('#data');
                    this.inputQuantidade = $('#quantidade');
                    this.inputValor = $('#valor');
                    this.negociacoesView.update(this.negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    const negociacao = new Negociacao_1.Negociacao(new Date(this.inputData.val().replace(/-/g, ',')), parseInt(this.inputQuantidade.val()), parseFloat(this.inputValor.val()));
                    this.negociacoes.adiciona(negociacao);
                    this.negociacoesView.update(this.negociacoes);
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
