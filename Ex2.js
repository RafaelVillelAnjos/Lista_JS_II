//Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY). Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas. 

var anoNascer = Number(prompt('Digite o ano que você nasceu no formato (YYYY):'))
var anoAtual = Number(prompt('Digite o ano em que estamos no formato (YYYY):'))
let idadePessoaAno, idadePessoaMes, idadePessoaSemana, idadePessoaDia

idadePessoaAno = anoAtual - anoNascer
idadePessoaMes = idadePessoaAno * 12
idadePessoaSemana = idadePessoaAno * 52
// +2 por causa dos dias a mais dos anos bissextos
idadePessoaDia = idadePessoaAno * 365 + 2 


alert('Você tem '+idadePessoaAno+' anos. Isso equivale a '+idadePessoaMes+' meses, ou a '+idadePessoaSemana+' semanas, ou a '+idadePessoaDia+' dias.')