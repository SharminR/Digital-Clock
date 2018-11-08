function mainFunction() {
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  minute = checkTime(minute);
  second = checkTime(second);

  if ( hour > 12 ) {
    hour = hour - 12;
    if ( hour == 12 ) {
      hour = checkTime(hour);
      document.getElementById("digitalClock").innerHTML = hour + ":" + minute + ":" + second + " AM";
    } else {
      hour = checkTime(hour);
      document.getElementById("digitalClock").innerHTML = hour + ":" + minute + ":" + second + " PM";
    }
  } else {
    document.getElementById("digitalClock").innerHTML = hour + ":" + minute + ":" + second + " AM";
  }

  setTimeout(mainFunction, 1000)
  var seconds = 0;
  function myFunction(){
    seconds++;
    console.log(seconds);
    setTimeout(myFunction, 1000);
  }
}

function checkTime(i) {
  if (i < 10) {i = "0" + i;}
  return i;
}
