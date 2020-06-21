/*Criar uma aplicação que informe o signo do usuário
A aplicação deve:

Perguntar ao usuário sua data de nascimento
Informar ao usuário qual o seu signo com base na sua data de nascimento*/

let readlineSync = require('readline-sync');

let dia = readlineSync.questionInt('Que dia você nasceu?');
let mes = readlineSync.questionInt('Que mês você nasceu?');

if(dia > 20 && mes == 3 || dia < 21 && mes == 4){
    console.log('Seu signo é ÁRIES');
}else if(dia > 20 && mes == 4 || dia < 21 && mes ==5){
    console.log('Seu signo é TOURO');
}else if(dia > 20 && mes == 5 || dia < 21 && mes ==6){
    console.log('Seu signo é GÊMEOS');
}else if(dia > 20 && mes == 6 || dia < 23 && mes ==7){
    console.log('Seu signo é CÂNCER');
}else if(dia > 22 && mes == 7 || dia < 23 && mes ==8){
    console.log('Seu signo é LEÃO');
}else if(dia > 22 && mes == 8 || dia < 23 && mes ==9){
    console.log('Seu signo é VIRGEM');
}else if(dia > 22 && mes == 9 || dia < 23 && mes ==10){
    console.log('Seu signo é LIBRA');
}else if(dia > 22 && mes == 10 || dia < 22 && mes ==11){
    console.log('Seu signo é ESCORPIÃO');
}else if(dia > 21 && mes == 11 || dia < 22 && mes ==12){
    console.log('Seu signo é SARGITÁRIO');
}else if(dia > 21 && mes == 12 || dia < 21 && mes ==1){
    console.log('Seu signo é CAPRICÓRNIO');
}else if(dia > 20 && mes == 1 || dia < 19 && mes ==2){
    console.log('Seu signo é AQUÁRIO');
}else if(dia > 18 && mes == 2 || dia < 21 && mes ==3){
    console.log('Seu signo é PEIXES');
}else{
    console.log('Opção inválida');
}
