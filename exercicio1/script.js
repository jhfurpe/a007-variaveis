//Parte 1

/*const nome = null 
let idade = null

console.log(typeof nome)
console.log(typeof idade)*/

/*ao declarar como null as variáveis o 
resultado será objeto pois não há valor atribuido.*/

const nome = prompt("Qual é o seu nome?")
let idade = prompt("Qual a sua idade?")
console.log(nome)
console.log(idade) 

console.log(typeof nome)
console.log(typeof idade)

console.log("Olá", nome, "você tem", idade)



// Muda para string por atribuir as "" ao fazer a pergunta

//Parte 2

const perguntaA = "Você está usando azul hoje?"
const perguntaB = "Você gosta de futebol?"
const perguntaC = "Você já foi para a praia?"

const respostaA = prompt(perguntaA)
const respostaB = prompt(perguntaB)
const respostaC = prompt(perguntaC)

console.log(perguntaA, respostaA)
console.log(perguntaB, respostaB)
console.log(perguntaC, respostaC)