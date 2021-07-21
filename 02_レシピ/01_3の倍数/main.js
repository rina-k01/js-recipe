const genkiFunction = function(number) {
  for (let n = 1; n <= number; n++)
    if (n % 3 === 0 || String(n).indexOf("3") >= 0) {
      console.log(`${n}!!!!!!!`)
    } else {
      console.log(n)
    }
}

setInterval(genkiFunction(40), 1000)

//n <= number;
