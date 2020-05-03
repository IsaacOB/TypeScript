class View {
    constructor(seletor) {
        this.elemento = $(seletor);
    }
    update(modelo) {
        this.elemento.html(this.template(modelo));
    }
}
