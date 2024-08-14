//  Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp. Criar um programa que calcule a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros) desperdiçado e a quantidade de chopp (litros) que sobrou. Esses dados devem ser digitados pelo usuário. Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos. Ao final, mostrar a média de litros bebidos por pessoa na festa.

var choppDesperdicio, choppSobrou, mediaChoppPessoa

choppDesperdicio = Number(prompt("Digite quanto litros de chopp foram desperdiçados:"))
choppSobrou = Number(prompt('Digite quantos litros de chopp sobrou: '))

mediaChoppPessoa = (300 - choppDesperdicio - choppSobrou) / 45

alert('Em média, cada pessoa bebeu '+mediaChoppPessoa+' litros de chopp.')