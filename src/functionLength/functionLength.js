function functionLength(fn) {
	return fn.length;
}


function greet() {
    console.log("Hello")
}

function greetPerson(name) {
    console.log(`Hello ${name}`);
}

console.log(functionLength(greet));//0
console.log(functionLength(greetPerson));//1