function countDown(time) {
    let counter = 0;

    while (counter < time){
      let localTime = time - counter;
      setTimeout(function() { console.log(localTime)} , (time - localTime) * 1000);
      counter++
    }

    setTimeout(function() { console.log("Liftoff!")} , (time) * 1000);

}
countDown(10);
