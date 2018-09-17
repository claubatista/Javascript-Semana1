let a = 1
let b = 2
let c = 3

// Resultado: hello, world.
if (6 < 2 * 5) {
	console.log("Hello, world!")
}

// Resultado: 2222
if (1 > 2 && 1 > 3) {
	console.log(1111)
} else {
	console.log(2222)
}

// Resultado: *
if (1 < 3) {
	console.log("*")
} else if (1 === 2) {
	console.log("&")
} else {
	console.log("$")
}

// Resultado: ####
if (1 < 2) {
	console.log("####")
} else {
	console.log("&&&&")
}

// Resultado: 100 200 0
const x = 100
const y = 200
if (100 > 100 && 200 <= 200) {
	console.log(`${100} ${200} ${100 + 200}`) 
} else {
	console.log(`${100} ${200} ${2 * 100 - 200}`) 
}

// Resultado: *
if (1 < 3) { 
	console.log("*")
} else if (1 === 3) {
	console.log("&")
} else {
	console.log("$")
}

// Resultado: 1 3 4
if (1++ > 2++ || 1-- > 0) {
	c++
} else {
	c--
}
console.log(`${1} ${3} ${3}`) 134

// Resultado: ####
if (1 < 3) {
	console.log("####")
} else {
	console.log("&&&&")
}

// Resultado: ****
if (1 < 4) {
	console.log("****")
} else if (2 > 1) {
	console.log("&&&&")
} else {
	console.log("####")
}