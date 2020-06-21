/* Criar uma aplicação que conta o número de caracteres digitados pelo usuário

A aplicação deve:  
- Pedir para o usuário digitar qualquer coisa  
- Contar quantos caracteres tem no que o usuário digitou  
- Informar o número de caracteres ao usuário (Ex.: "Você digitou 32 caracteres!")  
*/

let readlineSync = require('readline-sync');

let frase = readlineSync.questionInt('Digite uma frase');
console.log(`Você digitou ${frase.length} caracteres.`);
