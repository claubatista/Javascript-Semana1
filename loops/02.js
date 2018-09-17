// Escreva um loop em Javascript
// que gera uma matriz de zeros 5x5.
// [ [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0] ]

let matriz = []
for (let j = 0; j < 5; j++){
   let linha = []
    for (let i = 0; i < 5; i++){
        linha.push(0)
    }
    matriz.push(linha)
    console.log(linha)
 }
 console.log(arr)
     

// Escreva um loop em Javascript
// que gera uma matriz no seguinte
// formato:
// [ [0, 1, 2, 3, 4],
//   [1, 0, 1, 2, 3],
//   [2, 1, 0, 1, 2],
//   [3, 2, 1, 0, 1],
//   [4, 3, 2, 1, 0] ]

let arr = [];
for (let j = 0; j < 5; j++){
   let linha = []
    for (let i = 0; i < 5; i++){
        linha.push(Math.abs(i - j))
    }
    arr.push(linha)
    console.log(linha)
 }
 console.log(arr)


// Escreva um loop em Javascript
// que printa o seguinte padrão
// no console:
// *******
// ******
// *****
// ****
// ***
// **
// *

for (let i = 0; i < 7; i++){
   let linha = []
    for (let j = 0; j < (7 - i); j++){
        linha.push("*")
    }
    console.log(linha.join(" "))
 }
 console.log(arr)

// Escreva um loop em Javascript
// que printa o seguinte padrão
// no console:
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567 

for (let i = 1; i <= 7; i++){
   let linha = []
    for (let j = 1; j <= i; j++){
        linha.push(j)
    }
    for (let x = 0; x < (7 - i); x++){
        linha.push("*")
    }
    console.log(linha)
 }
 