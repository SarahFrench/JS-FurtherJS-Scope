//Due to local scope of let, you can redeclare 'a' in the { } block and it won't clash with the global variable
// => 3
// => 2
var a = 2;
{
    let a = 3;
    console.log(a);
}
console.log(a);

//Here you can't redeclare 'a' using var as it will clash with the global variable declared using let
// => 3
// => 2
let a = 2;
{
    var a = 3;
    console.log(a);
}
console.log(a);
