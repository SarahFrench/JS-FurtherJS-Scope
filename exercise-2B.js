//Doesn't use a loop


function countDown(time) {

  if(time >= 0){
    let localTime = time;
    setTimeout(function() { console.log(localTime)} , (3 - localTime) * 1000);
  } else {
    let localTime = time;
    return setTimeout(function() { console.log("Lift off!")} , (3 - localTime) * 1000);
  }
  time = time - 1;
  countDown(time)
}


countDown(3);
