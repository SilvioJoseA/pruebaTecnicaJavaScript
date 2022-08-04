import View from "../../../core/view/view";
import html from "./BView.html";
import "./BView..scss";
import Utils from "../../../core/utils";

export default class BView extends View {

    /**
     * Esta vista muestra un texto por 1 segundos y termina.
     */

    constructor(inputB) {
        super(html);
        this.inputB = inputB;
        this.init();
    }


async init() {

        let self = this;

        this.viewElement.querySelector(".number-container").innerHTML = this.inputB;
        console.log(this.inputB);
        Utils.onClickById('siguienteB', function (event) {
            event.preventDefault(event);
                  if(!self.inputB){
                    self.inputB = 0;
                  }
            var outputSuma = parseInt(self.inputB)+5;
            var botonB='';
                botonB = event.currentTarget.value;
            var outputB = [botonB,outputSuma];
            if(botonB ==='siguienteB'){
                console.log('function end en teoría');
                self.end(outputB);   
            }
        });

   }

}