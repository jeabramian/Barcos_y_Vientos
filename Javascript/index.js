//Validación del formulario usando un event handler

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myForm").addEventListener('submit', validarFormulario); 
  });


  //Defino la función validarFormulario
  function validarFormulario(evento) {
    evento.preventDefault();

    var Name = document.getElementById('Name').value;

    if(Name.length ==0) {
      alert('No te olvides de poner tu nombre');
      return;
    }
    var lastName = document.getElementById('lastName').value;
    if(lastName.length == 0) {
      alert('No te olvides de poner tu apellido');
      return;
    }

    var edad = document.getElementById('Age').value;
    var email = document.getElementById('Email').value;

    var caja1 = document.getElementById('Box1').checked;
    var caja2 = document.getElementById('Box2').checked;
    var caja3 = document.getElementById('Box3').checked;
    var caja4 = document.getElementById('Box4').checked;
    var caja5 = document.getElementById('Box5').checked;
    var caja6 = document.getElementById('Box6').checked;

    if (caja1 ==false && caja2 ==false && caja3 ==false && caja4 ==false && caja5 ==false && caja6 ==false ) {
        alert("Por favor, tilda una opción");
        return;
      }

    if (Email.value === "") {
        alert("Por favor, escribe tu correo electrónico");
        email.focus();
        return;
      }
    
    if (!emailVálido(Email.value)) {
        alert("Por favor, escribe un correo electrónico válido");
        return;
      }
 
    if (edad < 6) {
        alert ("Pedile a tu papá que te lleve");}
        else if (edad <=11) {
            alert ("Te conviene anotarte en una escuela de optimist");}
            else if (edad <18) {
                alert ("Podrías probar con vela ligera");    } 
   
      this.submit();
  }

  const emailVálido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);}

  
