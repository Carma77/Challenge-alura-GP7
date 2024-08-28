

function getFocus() {
    let textArea = document.getElementById("textAreaIzq");
    textArea.focus();
}

getFocus();//lo llamo aqui para que inicie con el focus al cargar


function copy() {
    let texto = document.getElementById("textAreaDer");
    texto.select();
    document.execCommand("copy");
    Swal.fire({
        icon: 'success',
        iconColor: '#000000',
        background: '#CCFFBD',
        title: '¡Texto copiado!',
        color:'#000000',
        confirmButtonColor: '#000000',
    });
}

function campoVacio(){

    Swal.fire({
        icon: 'error',
        iconColor: '#000000',
        background: '#CCFFBD',
        title: '¡Vaya!',
        color:'#000000',
        confirmButtonColor: '#000000',
        text: 'Ingresa un mensaje',
      });

}



function encriptar() {

    let sinMensaje = document.getElementById("sinMensaje");
    let salidaDetexto = document.getElementById("salidaDetexto");
    let contenedorBotonesDerecho = document.getElementById("contenedorBotonesDerecho");
    let texto = document.getElementById("textAreaIzq").value;


    if (texto.length!=0) {

        if (/[^a-zñ ]/.test(texto)) {
            

            Swal.fire({
                iconColor: '#000000',
                icon: 'error',
                background: '#CCFFBD',
                title: '¡Vaya!',
                color:'#000000',
                confirmButtonColor: '#000000',
                text: 'Escribe solo letras minusculas y sin acento',
              });

        }else{

            sinMensaje.style.display= "none";
            salidaDetexto.style.display= "flex";
            contenedorBotonesDerecho.style.display= "flex";

            let cifradoText = texto.replace(/e/gm, "enter");
            cifradoText = cifradoText.replace(/i/gm, "imes");
            cifradoText = cifradoText.replace(/a/gm, "ai");
            cifradoText = cifradoText.replace(/o/gm, "ober");
            cifradoText = cifradoText.replace(/u/gm, "ufat");

            document.getElementById("textAreaDer").innerHTML = cifradoText;

        }
 

    }else{
       
        campoVacio();
    }

}


function desencriptar(){

    let sinMensaje = document.getElementById("sinMensaje");
    let salidaDetexto = document.getElementById("salidaDetexto");
    let contenedorBotonesDerecho = document.getElementById("contenedorBotonesDerecho");
    let texto = document.getElementById("textAreaIzq").value;


    if (texto.length!=0) {

        sinMensaje.style.display= "none";
        salidaDetexto.style.display= "flex";
        contenedorBotonesDerecho.style.display= "flex";

        let cifradoText = texto.replace(/enter/gm, "e");
        cifradoText = cifradoText.replace(/imes/gm, "i");
        cifradoText = cifradoText.replace(/ai/gm, "a");
        cifradoText = cifradoText.replace(/ober/gm, "o");
        cifradoText = cifradoText.replace(/ufat/gm, "u");

        document.getElementById("textAreaDer").innerHTML = cifradoText;

    }else{

        campoVacio();
    }

}