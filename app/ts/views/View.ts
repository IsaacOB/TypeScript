class View<T> {

    protected elemento : Element;

    constructor(seletor:string){
        this.elemento = document.querySelector(seletor);
    }

    update(modelo:T) : void {
        this.elemento.innerHTML = this.template(modelo);
    }

    template(modelo:T): string {

        throw new Error('Implemente o método template!')
    }
}