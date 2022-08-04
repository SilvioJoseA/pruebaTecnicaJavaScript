import View from "../../../core/view/view";
import html from "./CView.html";
import "./CView..scss";
import Utils from "../../../core/utils";

export default class CView extends View {

    /**
     * Esta vista muestra un texto por 1 segundos y termina.
     */

    constructor(inputC) {
        super(html);
        this.inputC = inputC;
        this.init();
    }
async init() {
       
        let self = this;
        this.viewElement.querySelector(".number-container").innerHTML = this.inputC;
        
        
        Utils.onClickById('siguienteC', function (event) {
            event.preventDefault(event);
            var botonC ='';
                botonC = event.currentTarget.value;
            var outputC = [botonC,self.inputC];
            console.log('*');   
            console.log(outputC);
            console.log('*');
            if(botonC === 'siguienteC'){
                self.end(outputC);   
            }
        });

        Utils.onClickById('reiniciarC', function (event) {
            event.preventDefault(event);

           // console.log(event.currentTarget.value);//Elemento sobre el que se ejecuta el click
            var botonC='';
                botonC = event.currentTarget.value;
            var outputC = [botonC,self.inputC];

            if(botonC === 'reiniciarC'){
                self.end(outputC);   
            }
        });
           // Cuando presiono click cambio de estilo CSS
           let myDiv = document.getElementById('ventanaC');
           let myDivReiniciar = document.getElementById('reiniciarC');
           let myDivSiguiente = document.getElementById('siguienteC');
           let myDivSwap = document.getElementById('swap');

           console.log(myDiv.className);     
                   if(parseInt(this.inputC)<10){
                   myDiv.classList.replace("ventanaC1", "ventanaC");
                   myDivSwap.classList.replace('swap1','swap');
                   myDivReiniciar.classList.replace('reiniciarC1','reiniciarC');
                   myDivSiguiente.classList.replace('siguienteC1','siguienteC');
           
                    }else{
                    myDiv.classList.replace("ventanaC", "ventanaC1");
                    myDivSwap.classList.replace('swap','swap1');
                    myDivReiniciar.classList.replace('reiniciarC','reiniciarC1');
                    myDivSiguiente.classList.replace('siguienteC','siguienteC1');
                   
                  } 
        Utils.onClickById('swap', function (event) {
            event.preventDefault(event);
            console.log('Swap');

           // console.log(event.currentTarget.value);//Elemento sobre el que se ejecuta el click
            var swap='';
                swap = event.currentTarget.value;
            

            if(swap === 'swap'){
                console.log('Con este clock ingreso a cambiar estilos css');
               let myDiv = document.getElementById('ventanaC');
               let myDivReiniciar = document.getElementById('reiniciarC');
               let myDivSiguiente = document.getElementById('siguienteC');
               let myDivSwap = document.getElementById('swap');
                  console.log('*');
                  console.log(myDiv.className);
                  console.log(myDivSwap.className);
                  console.log('*');
            
                  console.log(parseInt(self.inputC))
                  if(myDiv.className === 'ventanaC'){
                   myDiv.classList.replace("ventanaC", "ventanaC1");
                   myDivSwap.classList.replace('swap','swap1');
                   myDivReiniciar.classList.replace('reiniciarC','reiniciarC1');
                   myDivSiguiente.classList.replace('siguienteC','siguienteC1');
                  }else{
                    myDiv.classList.replace("ventanaC1", "ventanaC");
                    myDivSwap.classList.replace('swap1','swap');
                    myDivReiniciar.classList.replace('reiniciarC1','reiniciarC');
                    myDivSiguiente.classList.replace('siguienteC1','siguienteC');
                  }
                  
                  
                  console.log(myDiv);
            }
        });





//          this.end(); // <- Acá podría retornar una salida, pero esta vista no tiene salida.
    }
    

}