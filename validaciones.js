/**
*Funcion para validar los elemneos requeriso (*)
*@param {Object} Forma
*/

function validarForma(forma){
  //Validamos el Usuario
  var usuario = forma.usuario;
  if (usuario.value == "" || usuario.value == "Escribir usuario")  {
    alert("Debes proporcionar un nombre de usuario");
    usuario.focus();
    usuario.select();
    return false;
  }

  //Validamos el password
  var password = forma.password;
  if (password.value == "" || password.value.length < 3) {
    alert("Debes proporcionar un password al menos de 3 caracteres");
    password.focus();
    password.select();
    return false;
  }

  //Validamos las Tecnologias
  var tecnologias = forma.tecnologia;
  var checkSeleccionado = false;
  //revisamos si se selecciono algun checkbox
  for (i= 0; i< tecnologias.length; i++) {
    if (tecnologias[i].checked) {
      checkSeleccionado = true;
    }
  }

  if (!checkSeleccionado) {
    alert("Debe proporcionar una tecnologia");
    return false;
  }

  //Validamos el genero
  var genero = forma.genero;
  var radioSeleccionado = false;

  //Revisamos si se selecciono algun radiobutton
  for(i = 0; i < generos.length; i++){
    if (generos[i].checked) {
      radioSeleccionado = true;
    }
  }

  if (!radioSeleccionado) {
    alert("Debe seleccionar el genero");
    return false;
  }

  //Validamos ocupacion
  var ocupacion = forma.ocupacion;
  if (ocupacion.value == "") {
    alert("Debe seleccionar una ocupacion");
    return false;
  }

  //Formulario Validado
  alert("Formulario valido, enviando datos...");
  return true;
}
