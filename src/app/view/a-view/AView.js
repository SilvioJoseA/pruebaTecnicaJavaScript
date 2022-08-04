import View from "../../../core/view/view";
import html from "./AView.html";
import "./AView..scss";
import Utils from "../../../core/utils";

export default class AView extends View {

    /**
     * Esta vista muestra un texto por 1 segundos y termina.
     */

    constructor() {
        super(html);
        this.init();
    }


   async init() {

        let self = this;
        Utils.onClickById('siguienteA', function (event) {
            event.preventDefault(event);
            var inputA = document.getElementById("inputA").value; 

            var botonA ='';
                botonA = event.currentTarget.value;
            var outputA= [botonA,inputA];   
            
            if(botonA === 'siguienteA'){
                console.log(outputA);
                self.end(outputA);   
            }
        });


    }

}