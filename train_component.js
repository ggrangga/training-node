const Xsquere = (n, squere, x) => {
  //console.log(squere, ' => ', n);
  try {
    //console.log('squere', squere , ' => ', BigInt(n));
    if(squere +1   < x)
      return BigInt(Xsquere(n*2, squere+1, x));
    else{
      //console.log(squere, ' | ', n, ' => ', BigInt(n));
      return BigInt(n);
    }
  }catch (err) {
    return 0;
  } 
}

const _Xsquere = function(n) {
  try {
    //console.log(BigInt(Math.pow(2, n-1)));
    return BigInt(Math.pow(2, n-1));
  }catch (err) {
    return 0;
  } 
}

const __Xsquere = function() {
  return (1n << 64n) -1n;
}

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = {Xsquere, _Xsquere, __Xsquere, fibonacci};