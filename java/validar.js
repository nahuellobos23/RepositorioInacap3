function validar(){
   let nombre = document.formulario.nombre.value;
   let apellidos = document.formulario.apellidos.value;
   let rut = document.formulario.rut.value;
   let email = document.formulario.email.value;
   let estadocivil = document.formulario.estadocivil.value;
   let genero = document.formulario.genero.value;
   let telefono = document.formulario.telefono.value;
   let comentario = document.formulario.comentario.value;


   if(nombre.lenght<3){
    alert("Error su nombre no supera el minimo de caracteres. ")
    document.formulario.nombre.focus();
    return;
   }
   if(nombre.lenght>30){
    alert("Error su nombre supera el maximo de caracteres. ")
    document.formulario.nombre.focus();
    return;
   }
   let vNombre = /^([A-Z]+[a-z]+\s*)+$/
   if(!nombre.value.match(vNombre)){
    alert("Error, solo debe ingresar caracteres Alfanumericos y espacios de ser necesario. ")
    document.formulario.nombre.focus();
    return;
   }

   if(apellidos.lenght<3){
    alert("Error sus apellidos no superan el minimo de caracteres. ")
    document.formulario.apellidos.focus();
    return;
   }
   if(apellidos.lenght>30){
    alert("Error sus apellidos superan el maximo de caracteres. ")
    document.formulario.apellidos.focus();
    return;
   }
   let vApellidos = /^([A-Z]+[a-z]+\s*)+$/
   if(!apellidos.value.match(vApellidos)){
    alert("Error, solo debe ingresar caracteres Alfanumericos y espacios de ser necesario. ")
    document.formulario.apellidos.focus();
    return;
   }
   if(rut.lenght<9 || rut.lenght>10){
    alert("EL rut ingresado supera o excede el numero de caracteres permitido. ")
    document.formulario.rut.focus();
    return;
   }
   let expRut = /^([0-9]{8,9}-[0-9K-k]{1,1})$/;
    if(!rut.value.match(expRut)){
        alert("*Rut Invalido");
        rut.focus();
        return;
    }
   if(email.lenght<3){
    alert("El email ingresado no supera el numero de caracteres minimo. ")
    document.formulario.email.focus();
    return;
   }
   if(estadocivil==""){
      alert("Debe ingresar su estado civil")
      document.formulario.estadocivil.focus();
      return false;
     }
   let seleccionado = false;
   for(let i = 0; i < genero.length; i++){
    if(genero[i].checked){
    seleccionado = true;
    break;}
   }
   if(seleccionado == false){
    alert("Genero es obligatorio");
    return false;
   }
   if((telefono.charAt(0)!=9)){
    alert("error el numero ingresado debe empezar con un 9. ")
    document.formulario.telefono.focus();
    return;
   }
   let vTelefono = /^\d+$/;
   if(!telefono.value.match(vTelefono)){
    alert("Telefono invalido, ingrese solo digitos numericos.");
    document.formulario.telefono.focus();
    return;
   }
   let vComentario = /^([A-Z]+[a-z]+\s*)+$/;
   if(!comentario.value.match(vComentario)){
    alert("Error, solo debe ingresar caracteres Alfanumericos y espacios de ser necesario. ")
    document.formulario.comentario.focus();
    return false;
   }
   alert("¡Sus datos fueron ingresados correctamente!")
   document.formulario.submit() = true;
}

//Profesor la verdad no alcance a terminar todo, ademas de que no comprendo porque motivo
//De porque mis funciones de validacion no arrojan mensajes de alerta en la pagina de mi formulario
//agradeceria si es que al momento de revisar pudiera usted escribirme una explicacion de porque no
//funciono.
