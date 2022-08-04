import View from "../../../core/view/view";
import html from "./DView.html";
import "./DView..scss";
import Utils from "../../../core/utils";

export default class CView extends View {

    /**
     * Esta vista muestra un texto por 1 segundos y termina.
     */

    constructor(inputD) {
        super(html);
        this.inputD = inputD;
        this.init();
        
    }


   async init() {

        let self = this;
        console.log(self.entradaD);

        Utils.onClickById('atrasD', function (event) {
            event.preventDefault(event);
            var botonD = '';
            var botonD = event.currentTarget.value;
            
            var outputD = [botonD,'8'];
            

            if(botonD === 'atrasD'){
                self.end(outputD);   
            }
        });

    
        //Crear una función async waitForClick() que retorne 
        //una promesa que se resuelva una vez que se aprete el botón Click. 
        Utils.onClickById('click0',function (event) {
            Utils.waitForClick();
        });
        Utils.waitFor5Final();
        Utils.waitFor3Final();

    }

}
