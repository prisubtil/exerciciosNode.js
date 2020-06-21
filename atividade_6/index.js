/*Adicionar um ranking na aplicação feita na atividade 5
A aplicação deve:

Perguntar ao usuário o seu nome
Pedir para o usuário digitar qualquer coisa
Contar quantos caracteres tem no que o usuário digitou
Informar o número de caracteres ao usuário (Ex.: "Você digitou 32 caracteres!")
Mostrar para o usuário qual foi a pessoa que digitou mais caracteres*/

let readlineSync = require('readline-sync');

let nome = readlineSync.question('Qual o seu nome?');
let frase = readlineSync.questionInt('Digite uma frase');
console.log(`${nome} digitou ${frase.length} caracteres.`);
