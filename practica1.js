function ConvertirAPesos(){
var ValorDolar = 3344.48161;
var CantidadAConvertir = document.getElementById('dolares').value;
var resultado = CantidadAConvertir * ValorDolar;
document.getElementById('Resultado').innerHTML = resultado;
}