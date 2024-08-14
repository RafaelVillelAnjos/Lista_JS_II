//  Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00. Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais. 

var kgPlastico, kgPapel, kgMetal
var reaisPlastico, reaisPapel, reaisMetal

kgPlastico = Number(prompt('Digite a quantidade,em quilos, de PLÁSTICO que deseja entregara para a fábrica:'))
kgPapel = Number(prompt('Digite a quantidade,em quilos, de PAPEL que deseja entregara para a fábrica:'))
kgMetal = Number(prompt('Digite a quantidade,em quilos, de METAL que deseja entregara para a fábrica:'))

reaisPlastico = (kgPlastico / 10) * 2
reaisPapel = (kgPapel / 30) * 3
reaisMetal = (kgMetal / 50) * 5

alert('Você receberá:\n R$'+reaisPlastico+' pelo plástico\nR$'+reaisPapel+' pelo papel\nR$'+reaisMetal+' pelo metal')