// Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela. 

var valorIMC, alturaMetrosPessoa, pesoQuilosPessoa

alturaMetrosPessoa = Number(prompt('Digite sua altura EM METROS APENAS COM NÚMEROS E COM PONTO NO LUGAR DA VÍRGULA:'))
pesoQuilosPessoa = Number(prompt('Digite seu peso EM QUILOS APENAS COM NÚMEROS E COM PONTO NO LUGAR DA VÍRGULA:'))

valorIMC = pesoQuilosPessoa / (alturaMetrosPessoa * alturaMetrosPessoa)

alert('Seu IMC é '+valorIMC+'.')