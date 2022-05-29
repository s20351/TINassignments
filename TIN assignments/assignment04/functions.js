function fib(n){ 
if (n <= 2) return 1;
return fib(n-1) + fib (n-2);
}

// console.log(fib(7));

function palindrome(text) {

    var length = text.length;
    for (var i = 0; i < length/2; i++) {
      if (text[i] !== text[length - 1 - i]) {
        //   console.log(text[i] + " " + text[length - 1 - i])
          return false;
      }
    }
    return true;
   }

// console.log( palindrome("abccba"));

function whatType(argument) {
   console.log(typeof(argument))
  }

// whatType(5)
// whatType("hello")

function amountToCoin(amount, coins ){

        numberOfCoins = coins.length;
        
    for(var i=0; i<numberOfCoins; i++){
        currentCoin = coins[i];
    while(amount >= currentCoin){
        amount -= currentCoin;
        console.log(currentCoin);
    }
    }   
    console.log("amount left: " + amount)
}

//  amountToCoin(46,[25, 10, 5, 2, 1])