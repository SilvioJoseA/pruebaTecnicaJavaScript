import TextView from "./view/text-view/text-view";
import AView from "./view/a-view/AView";
import BView from "./view/b-view/BView";
import CView from "./view/c-view/CView";
import DView from "./view/d-view/DView";



export default class App {

    constructor() {

    }

    async start() {
        await (new TextView("El")).start();
        await (new TextView("proyecto")).start();
        await (new TextView("funciona")).start();
        await (new TextView("correctamente!")).start();

        var output = ['',''];
        var output =await((new AView()).start());
        

        console.log(output);
        
    while (output[0]!= ''){
        if(output[0] === 'siguienteA'){
            output =await((new BView(output[1])).start());
            console.log(output);
            console.log(output[1]);
        }
        if(output[0] === 'siguienteB'){
           //  new CView().clickO5();
            output =await((new CView(output[1])).start());
            
            console.log(output);
            console.log('valor enviado de CtoD'); 
            //
        }
        if(output[0] === 'siguienteC'){
            var output =await((new DView(output[1])).start());
            console.log(output);
                     
        }
        if(output[0] === 'reiniciarC'){
            var output =await((new AView(output[1])).start());
            console.log(output);           
        }
        if(output[0] === 'atrasD'){
            var output =await( (new BView("8")).start());
            console.log(output);           
        }
    }    
  
        
    }
}