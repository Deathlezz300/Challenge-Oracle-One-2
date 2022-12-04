var palabras=["PERRO","GATO","CERDO","CARRO","HTML","CSS","JAVA","RAZOR","TELEFONO"];
var decision;
var cantidad=0;
var correctas=0;

var rendir=document.getElementById("rendirse");
rendir.addEventListener("click",rendirse);

function insertar(){
   document.getElementById("contenido2").style.display="flex";
   document.getElementById("botones-fin").style.display="flex";
   document.getElementById("erroneas").style.display="flex";
   let area=document.getElementById("id_area");
   let palabra=area.value;
   palabra=palabra.toUpperCase();
   palabras.push(palabra);
   document.getElementById("formulario-agregar").style.display="none";
   iniciar();
}

function rendirse(){
    let textos=document.querySelectorAll(".card");
        textos.forEach((etiqueta)=>{
            etiqueta.innerText=etiqueta.id;
        });
        correctas=decision.length;
        cantidad=decision.length;
}

function iniciar(){
    decision=seleccionarPalabra();
    dibujarLineas(decision);
    document.addEventListener("keyup",validar);
}

function seleccionarPalabra(){
    let decision=palabras[Math.floor(Math.random()*palabras.length)];
    return decision;
}

function dibujarLineas(decision){
    let contenido=document.getElementById("letras");
    let tamano=decision.length;
    for(var posicion=0;posicion<tamano;posicion++){
        let piezaPadre=document.createElement("div");
        piezaPadre.classList.add("card-padre");
        let pieza=document.createElement("p");
        pieza.classList.add("card");
        pieza.id=decision[posicion];
        piezaPadre.appendChild(pieza);
        contenido.appendChild(piezaPadre);
    }
}
 function validar(evento){
    let letra=evento.key;
    letra=letra.toUpperCase();
    if(decision.includes(letra) && correctas<decision.length){
        let textos=document.querySelectorAll(".card");
        textos.forEach((etiqueta)=>{
            if(etiqueta.textContent=="" && etiqueta.id==letra){
                etiqueta.innerText=letra;
                correctas++; 
            }
        });   
    }else{
        if(evento.keyCode>=65 && evento.keyCode<=90 && cantidad<10){
            let malas=document.getElementById("erroneas");
            let elemento=document.createElement("p");
            elemento.classList.add("card2");
           elemento.innerText=letra;        
            malas.appendChild(elemento);
            imagen(cantidad);
            cantidad++;
        }
    }

    if(correctas==decision.length){
        alert("ganaste");
    }else if(cantidad>=10){
        alert("perdiste");
    }
}

function imagen(valor){
    let url="assets/images/parte"+valor+".png";
    let div= document.getElementById("ahorcado").src=url;
}


