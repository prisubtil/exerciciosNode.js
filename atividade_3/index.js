/*A aplicação deve:

Perguntar para o usuário o tamanho dos lados dos quadrado
Calcular sua área
Informar a área calculada ao usuário*/

let readlineSync = require('readline-sync');

let lado1 = readlineSync.questionInt('Informe o primeiro lado: ');
let lado2 = readlineSync.questionInt('Informe o segundo lado:');
let area = lado1*lado2
console.log(`A área do quadrado é ${area}.);
