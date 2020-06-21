/*### Criar uma aplicação de prevenção de COVID
A aplicação deve:
- Perguntar se o usuário está usando máscara quando precisa sair de casa (Sim ou Não)  
- Perguntar se o usuário está lavando as mãos frequentemente  
- Se o usuário responder sim para as perguntas anteriores, mostrar um elogio para o usuário  
- Se não, dar bronca no usuário  */

let readlineSync = require('readline-sync');

let usandoMascara = readlineSync.question('Você está usando máscara quando precisa sair de casa? ');
let usandomascaraUpper = usandoMascara.toUpperCase();
let lavandoMaos = readlineSync.question('Você está lavando as mãos frequentemente?');
let lavandomaosUpper = lavandoMaos.toUpperCase();
if(usandomascaraUpper == 'SIM' && lavandomaosUpper == 'SIM'){
    console.log('Parabéns, você está prevenido!')
}else if(usandomascaraUpper == 'SIM' && lavandomaosUpper == 'NAO'){
    console.log('Você precisa lavar as mãos frequentemente.');
}else if(usandomascaraUpper == 'NAO' && lavandomaosUpper == 'SIM'){
    console.log('Você precisa colocar a máscara antes de sair.');
}else{
    console.log('Você precisa colocar a máscara para sair e lavar as mãos com mais frequência.')
}