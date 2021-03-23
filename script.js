function converterParaReal() {

    /*
Abaixo, na variavel 'dollarParaReal', utilizei a função 'toLocaleString' para formatar o valor exibido em Real separando os milésimos por ponto(.) e separando as decimais por virgula (,) ao inves do ponto (.). Para isto, pesquisei na web e usei como referencia um artigo da Alura e a página W3Schools
*/

    var valorEmDollar = parseFloat(
            document.getElementById('dollarToReal')
            .value.replace(',', '.'))
        .toFixed(2)

    var cotacaoDollar = 5.52

    var dollarParaReal = (valorEmDollar * cotacaoDollar)
        .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    // document.getElementById('resultado').innerHTML = dollarParaReal

    alert("$ " + valorEmDollar + " convertido em Real é igual a " + dollarParaReal)
}

function CelciusParaFahrenheit() {
    var valorEmCelsius = parseInt(
        document
        .getElementById("CelsiusToFar")
        .value)

    var valorEmFahrenheit = valorEmCelsius * 1.8 + 32

    alert(valorEmCelsius + " Celcius é igual a " + valorEmFahrenheit + " Fahrenheit")
}

function AnosLuzParaKM() {
    var valorEmAnozLuz = parseInt(
        document
        .getElementById("anosLuzToKm")
        .value)
    var valorEmKM = parseFloat(9460730472580.8 * valorEmAnozLuz).toLocaleString('pt-BR')

    alert(valorEmAnozLuz + " anos-luz é igual a " + valorEmKM + " Km")
}