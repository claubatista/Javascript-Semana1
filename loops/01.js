// Escreva um loop um Javascript
// que vai calcular a soma de todos
// os números entre 0 e 300.

let soma = 0

for (let i = 0; i <= 300; i++) {
    soma += i;
    console.log(soma)
}

// Escreva um loop em Javascript
// que vai calcular a seguinte soma:
// 1 * 1 + 2 * 2 + 3 * 3 + ... + 400 * 400

let soma = 0

for (let i = 1; i <= 400; i++){
   soma += i ** 2;
   console.log(soma)
}


// Escreva um loop em Javascript
// que vai calcular a seguinte soma:
// 1 * 2 + 2 * 3 + 3 * 4 + ... + 249 * 250
let soma = 0

for (let i = 1; i <= 250; i++){
    soma += i * (i + 1);
    console.log(soma)
}


// Escreva um loop em Javascript que
// vai calcular 10! (10 fatorial), o
// que significa 10 * 9 * 8 * 7 ... * 1.

let fatorial = 1

for (let i = 10; i > 0; i--){
    fatorial *= i; // fatorial = fatorial
    console.log(fatorial)
}


// Escreva um loop em Javascript que 
// calcula quantos termos a soma
// 1 + 2 + 3 + ... precisa para
// que o resultado dela exceda um milhão.

let i = 0;
soma = 0;
while (soma <= 1000000) {
    i++
    soma += i; 
}
console.log(i)


// Escreva um loop em Javascript que
// simule o problema 3x + 1.
// ref: https://pt.wikipedia.org/wiki/Conjectura_de_Collatz
// "Esta conjectura aplica-se a qualquer 
// número natural não nulo, e diz-nos para, 
// se este número for par, o dividir 
// por 2 (/2), e se for impar, para 
// multiplicar por 3 e adicionar 1 (*3+1).
// Desta forma, por exemplo, se a sequência 
// iniciar com o número 5 ter-se-á: 5; 16; 8; 4; 2; 1".

let i = 5

while (i > 1){
  if (i % 2 == 0){ 
    i = (i / 2);
  } else { 
      i = (i * 3) + 1; 
  }
  console.log(i)
}

// Escreva um loop em Javascript
// que gera uma lista com 100
// número randomicos.

let arr = []

for (let i = 0; i < 100; i++){
    arr.push(Math.floor(Math.random() * 100))
    console.log(i)
}


// Escreva um loop em Javascript
// que "lance uma moeda" a cada 
// nova iteração. Considere 1 = cara,
// 0 = coroa. Rode esse loop 1000 vezes e
// printe o numero de caras e o numero
// de coroas no console.
let cara = 0
let coroa = 0


for (let i = 0; i < 1000; i++){
   let moeda = Math.floor(Math.random() * 2)
    if (moeda === 1){
        cara++
    } else {
        coroa++
    }
}

console.log(cara)
console.log(coroa)
