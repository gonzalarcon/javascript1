// función de cálculo con valores proporcionados en la página
function calculo() {
  const cantidad = document.querySelector('#cantidad').value;
  const color = document.querySelector('#color').value;
  const precio = document.querySelector('#precio').innerHTML;

  if (cantidad != '' && color != '') {
    document.querySelector('#valor').innerHTML = cantidad * precio;
    document.querySelector('#total_cantidad').innerHTML = cantidad;
    document.querySelector('#esfera').style.backgroundColor = color;
  } else {
    alert ('Debes ingresar un número válido y el color en inglés (o en su defecto, en sistema hexagesimal). Ej: #ffaa00')
  }
}
