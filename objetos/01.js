// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon

const pokemon =  {
    nome: "charizart",
    nome_em_japones: "リザードン,",
    numero_nacional: 6,
    habilidade: "Fogo e Voador",
    caracterista: "Dragao",
}


// 2.
// Printe no console a seguinte
// frase: "Hello, my name is < >.
// And my name in Japanese is < >."
pokemon.diga_ola = function () {
console.log (`Hello, my name is ${pokemon.nome}. And my name in Japanese is ${pokemon.nome_em_japones}.`)
}
// 3.
// Adicione uma nova propriedade ao
// seu pokemon chamada `can_fly` 
// (ou algo do tipo) e defina
// ela como `true` ou `false`.

pokemon.pode_voar = true

// 4.
// Adicione um método ao seu pokemon
// chamado `fly` que retorna "Sorry,
// I can't fly" ou "Flyyyyiinnngggg!".

pokemon.voe = function (){
    if (this.pode_voar) {
        return "noix que voa bruxão"
    } else {
        return "Ah, não, outra vez!"
    }
}

// 5.
// Adicione um método chamado
// `do_something` ao seu pokemon
// que retorna randomicamente uma 
// das Strings "FIGHT", "BAG" ou "RUN".

pokemon.luta = function (){
   const acoes  = ["QUEIMA", "VOA",  "DESCE A PORRADA"]
   return acoes [Math.floor(Math.random() * acoes.length)]
}

// 6.
// Adicione um método chamado
// `ask` ao seu pokemon que printa
// no console "What will < > do?" e
// retorna o resultado do metodo
// `do_something`.
pokemon.pergunta = function (){
    console.log(`What will ${pokemon.nome} do?`)
    return this.luta()
}

// 7. 
// Printe todas as propriedades 
// do seu pokemon no console.

for (const prop in pokemon){
    console.log(prop)
}

// 8. 
// Printe todas as propriedades
// e seus respectivos valores no
// console no seguinte formato:
// <propriedade>: <valor>

for (const prop in pokemon){
    console.log(`${prop}:${pokemon[prop]}`)
} 

// 9.
// Crie uma funcao construtora
// de um pokemon genereico
// function (nome, nome_japones) {}

function Pokemon (nome, nome_japones) {
    this.nome = nome
    this.nome_japones = nome_japones
    this.diga_ola = = function () {
    console.log(`Hello, my name is ${this.nome}. And my name in Japanese is ${this.nome_japones}.`)
    }
    this.voe = function () {
		if (this.pode_voar) {
            return "noix que voa bruxão"
        } else {
            return "Ah, não, outra vez!"
        }
    }
    this.luta = function () {
        let acoes = [
            "QUEIMA", 
            "VOA",  
            "DESCE A PORRADA"]
		return acoes[Math.floor(Math.random() * acoes.length)]
	}
	this.pergunta = function () {
		console.log(`O que ${this.nome} vai fazer?`)
		return this.luta()
	}
}

