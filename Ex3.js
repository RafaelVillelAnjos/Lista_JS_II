//Programar a conversão de uma temperatura digitada pelo usuário em graus Celsius para Fahrenheit. Mostrar o resultado na tela. 

var tempCel = Number(prompt('Digite a temperatura EM CELSIUS que você deseja converter para Fahrenheit:'))
var tempFah

tempFah = tempCel * (9/5) + 32

alert('Essa temperatura em Celsius equivale a '+tempFah+' graus Fahrenheit.')