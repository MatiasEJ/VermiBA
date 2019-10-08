$(document).ready(function(){
    
    $("#calcular").click(function() {
        let largo = document.getElementById("largoTam").value;
        let ancho = document.getElementById("anchoTam").value;
        let diam = document.getElementById("diamTam").value;
        let ctMin = 2500/10000;
        let ctMax = 7500/10000;
        let superficie;

        let cntLom = document.getElementById("cantLomb").value;
        let grLom = document.getElementById("gramLomb").value;
        const pesoLomb = 0.4;
        
    
        numLomb();
        gramLomb();
    
        function numLomb() {
            let cant = pesoLomb * cntLom;
            document.getElementById("lomAgr").innerHTML = cant.toFixed(1);
        }
        function gramLomb() {
            let peso = grLom / pesoLomb;
            document.getElementById("grAlomb").innerHTML = peso.toFixed(1);
        }    
        

        if(largo && ancho){
            superficie = supRec();
        }else if (diam) {
            superficie = supCir();
        } else {
            superficie = document.getElementById("opSup").value;
            
            
        }
        
    
        ctLombMin();
        ctLombMax();
        comidaMin();
        comidaMax();
        reproMens();

        function supRec() {       
            return largo*ancho;
        }

        function supCir() {        
            return Math.pow((diam/2),2)*3.14;
            
        }
        
        function ctLombMin() {
            let min = ctMin * superficie;
            document.getElementById("LombMin").innerHTML = min; 
            return min;
        
        }
        function ctLombMax() {
            let max = superficie * ctMax;
            document.getElementById("LombMax").innerHTML = max; 
            return max;
        
        }
        
        function comidaMin(){
            let comMin = (ctLombMin()*0.5)*7;
            document.getElementById("comMin").innerHTML = comMin.toFixed(2);
        
        }
        function comidaMax(){
            let comMax = (ctLombMax()*.7)*7;
            document.getElementById("comMax").innerHTML = comMax.toFixed(2);
        
        }

        function proyec(l){
            let pro = l + l * 0.7;
            return pro;
        }

        function reproMens(){
            let pro = proyec(ctLombMin());
            document.getElementById("proyec1").innerHTML = pro;
             
            document.getElementById("proyec2").innerHTML = proyec(pro).toFixed(1);
            
            document.getElementById("proyec3").innerHTML = proyec(proyec(pro)).toFixed(1);
        }


    });

    
    
    

    
    
    

});





