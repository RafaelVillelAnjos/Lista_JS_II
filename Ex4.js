// Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores. Em seguida o número de votos do candidato X, o número de votos do candidato Y, total de votos brancos e total de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores). Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. 

var votosTotais, votosCandidatoX, votosCandidatoY, votosBrancos, votosNulos
var porcentagemVotosX, porcentagemVotosY, porcentagemVotosBrancos, porcentagemVotosNulos

votosTotais = Number(prompt('Digite o número total de eleitores da cidade:'))
votosCandidatoX = Number(prompt('Digite o número de votos do candidato X:'))
votosCandidatoY = Number(prompt('Digite o número de votos do candidato Y:'))
votosBrancos = Number(prompt('Digite o número de votos brancos:'))
votosNulos = Number(prompt('Digite o número de votos nulos:'))

porcentagemVotosX = (votosCandidatoX / votosTotais) * 100
porcentagemVotosY = (votosCandidatoY / votosTotais) * 100
porcentagemVotosBrancos = (votosBrancos / votosTotais) * 100
porcentagemVotosNulos = (votosNulos / votosTotais) * 100

alert('Ao total tiveram '+votosTotais+' votos.\nO candidato X recebeu '+porcentagemVotosX+'% dos votos.\nO candidato Y recebeu '+porcentagemVotosY+'% dos votos.\n'+porcentagemVotosBrancos+'% dos votos foram brancos\n'+porcentagemVotosNulos+'% dos votos foram nulos.')
