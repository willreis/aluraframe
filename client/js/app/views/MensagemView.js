class MensagemView extends View {
<<<<<<< HEAD
    
    constructor(elemento) {
       super(elemento);
    }
    
   template(model) {
       
       return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
   }
=======

    constructor(elemento){
        super(elemento);
    }

    template(model){
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>`: '<p></p>';
    }

>>>>>>> c82c84bb245b5d824d7bc6ca91772aea0b92bbe3
}