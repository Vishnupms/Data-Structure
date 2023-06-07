const readlineSync = require('readline-sync');

function factorial() {
  let n = readlineSync.question("Enter a number: ");
  n = parseInt(n);
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result = result * i;
  }

  console.log("The factorial of", n, "is", result);
}

factorial();
