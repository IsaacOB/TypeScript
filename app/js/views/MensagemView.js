class MensagemView extends View {
    update(modelo) {
        this.elemento.innerHTML = this.template(modelo);
    }
    template(modelo) {
        return `<p class = "alert alert-info"> ${modelo}</p>`;
    }
}
