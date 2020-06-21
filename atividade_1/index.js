/* ## Importe a biblioteca ##
Criar uma aplicação que realiza auto-checkin

A aplicação deve:  
- Perguntar qual o número do vôo do usuário  
- Perguntar em qual fileira o usuário deseja sentar (A, B, C, D ou F)  
- Devolver um cartão de embarque com as informações de número do vôo e fileira escolhida pelo usuário  
## Ao final, suba suas atividades para o GitHub

// ## Faça o código ## 
*/
var readlineSync = require('readline-sync');

var numeroVoo = readlineSync.questionInt('Qual o número do seu vôo? ');
var fileira = readlineSync.question('Qual fileira o Sr. deseja sentar?');
if(fileira == 'A'){
    console.log(`Vôo ${numeroVoo} ,embarque na fileira A.`);
}else if(fileira == 'B'){
    console.log(`Vôo ${numeroVoo} ,embarque na fileira B.`);
}else if(fileira == 'C'){
    console.log(`Vôo ${numeroVoo} ,embarque na fileira C.`);
}else if(fileira == 'D'){
    console.log(`Vôo ${numeroVoo} ,embarque na fileira D.`);
}else if(fileira == 'E'){
    console.log(`Vôo ${numeroVoo} ,embarque na fileira E.`);
}else if(fileira == 'F'){
    console.log(`Vôo ${numeroVoo} , embarque nafileira F.`);
}else{
    console.log('Esta opção não é válida');
}