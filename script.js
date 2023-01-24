
function encriptar(){
 
    var frase=document.getElementById("textoEncriptado").value.toLowerCase(); /*esta value es para que convierta la letra minuscula*/
    var textoEncriptado=frase.replace (/e/img,"enter");
    var textoEncriptado=textoEncriptado.replace (/i/img,"imes");
    var textoEncriptado=textoEncriptado.replace(/o/img,"ober");  
    var textoEncriptado=textoEncriptado.replace(/a/img,"ai");
    var textoEncriptado=textoEncriptado.replace(/u/img,"ufat");
  
    
    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado ;
    
    document.getElementById("botonCopiar").style.display="show"; 
    document.getElementById("botonCopiar").style.display="inherit";/*muestra el boton al darle click */  
    document.getElementById("imagen").style.display="none"; 
    
     
    document.getElementById("subtitulo").style.display="none";
    

  }
  function desencriptar(){
 
    var frase=document.getElementById("textoEncriptado").value.toLowerCase(); /*esta value es para que convierta la letra minuscula*/
    var textoEncriptado=frase.replace (/enter/img,"e");
    var textoEncriptado=textoEncriptado.replace (/imes/img,"i");
    var textoEncriptado=textoEncriptado.replace(/ai/img,"a"); 
    var textoEncriptado=textoEncriptado.replace(/ober/img,"o");
    var textoEncriptado=textoEncriptado.replace(/ufat/img,"u");
  
    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado ;  
    
  }

  function copiar(){
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
    alert("mensaje copiado");
  }
  