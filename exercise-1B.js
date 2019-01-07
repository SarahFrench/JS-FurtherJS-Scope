function countDown() {
    for (var i = 3; i >= 0; i--) {
      console.log(i);
        setTimeout(function() {
            console.log(i || "Lift-off!");
        }, (3 - i) * 1000);
    }
}
countDown();

//here using var makes i have scope in the whole function. This means that after
// the delay, each console.log accesses the value of i that remains after the
// for loop has finished.




function countDown() {
    for (let i = 3; i >= 0; i--) {
      console.log(i);
        setTimeout(function() {
            console.log(i || "Lift-off!");
        }, (3 - i) * 1000);
    }
}
countDown();

//here, using let, there's a new declaration of i for each loop which only has
// scope within that specific loop. Each time setTimeout is invoked it has closure
// that specifies the value of i for that block of the loop
