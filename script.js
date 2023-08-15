function suffix(i) {
    let output = i;
    var j = i % 10,
      k = i % 100;
    if (j == 1 && k != 11) {
      output =  i + "st";
    }
    if (j == 2 && k != 12) {
      output = i + "nd";
    }
    if (j == 3 && k != 13) {
      output = i + "rd";
    }
    document.getElementById("year").innerHTML = output+ " ";
  }
  
  let year = Number(new Date().getFullYear()) - 1947;
  suffix(year);
  