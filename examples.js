//EXAMPLE OF SCOPES

// if("I want to collapse this code in Atom"){
// const a = 11; //global scope
//
// function foo(b) { //b is passed into foo - block scope
//     const c = a + b; //c is created locally in foo
//
//     function bar(d) {
//         console.log(a, b, c, d);
//     }
//
//     bar(c + 1); //d is created when bar is invoked, using the local variable c
// }
//
// foo(42);        // Prints 11 42 53 54
// }

//EXAMPLE OF CLOSURES


function makeFunction() {
    var a = 42;

    function lol() {
        console.log("lol")
    }

    function innerFunction() {
        console.log(a);
    }

    return innerFunction;
}
var foo = makeFunction();
foo();     // 42
