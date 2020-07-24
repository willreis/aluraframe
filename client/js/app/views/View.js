<<<<<<< HEAD
class View {
    
    constructor(elemento) {
        
        this._elemento = elemento;
    }
    
    template() {
        
        throw new Error('O método template deve ser implementado');
    }
    
    update(model) {
        
        this._elemento.innerHTML = this.template(model);
    }
=======
class View{

    constructor(elemento){
        this._elemento = elemento;
    }

    template(){
        throw new Error('O método template deve ser implementado');
    }

    update(model){
        this._elemento.innerHTML = this.template(model);
    }

>>>>>>> c82c84bb245b5d824d7bc6ca91772aea0b92bbe3
}