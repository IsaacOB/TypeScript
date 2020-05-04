export abstract class View<T> {

    protected elemento : JQuery;

    constructor(seletor:string){
        this.elemento = $(seletor);
    }

    update(modelo:T) : void {
        this.elemento.html(this.template(modelo));
    }

    abstract template(modelo:T) : string;
}