class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(modelo) {
        this.elemento.innerHTML = this.template(modelo);
    }
    template(modelo) {
        throw new Error('Implemente o método template!');
    }
}
