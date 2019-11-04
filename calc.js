$(document).ready(function(){
    let rnd = Math.floor((Math.random() * 2) + 1);
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
            document.getElementById("proyec1").innerHTML = pro.toFixed(1);
             
            document.getElementById("proyec2").innerHTML = proyec(pro).toFixed(1);
            
            document.getElementById("proyec3").innerHTML = proyec(proyec(pro)).toFixed(1);
        }


    });
    let postFace = document.getElementById("postFacebook");

    let postCompostera = "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fnotes%2Fvermi-ba%2Ftipos-de-lombricomposteras%2F571738813292652%2F&width=350&show_text=true&appId=195560768055084&height=551 ";
    let postComida = "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fnotes%2Fvermi-ba%2Fpreparando-la-comida%2F568198820313318%2F&width=350&show_text=true&appId=195560768055084&height=583";  
    console.log(rnd);   
    switch (rnd) {
        case 1:
            postFace.src = postCompostera;
            break;
        case 2:
            postFace.src = postComida;
            break;
        default:
            break;
    }
    

});









