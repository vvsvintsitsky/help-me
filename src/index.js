module.exports = function count(s, pairs) {
  var answer = 0;

  if(pairs[0][1] > 10) {
    return;
  }

  var nNum = pairs[0][0] ** pairs[0][1];
  for(var i = 1; i < pairs.length; i++) {
    nNum *= pairs[i][0] ** pairs[i][1];
  }

  if(nNum > 184848300) {
    return;
  }

  var calculateGreatestCommonDivisor = function(a, b) {
    var temp;
    while(b !== 0) {
      temp = a;
      a = b;
      b = temp % b;
    }
    return a;

    /*if (b === 0) {
      return a;
    } else {
      return calculateGreatestCommonDivisor(b, a % b);
    }*/
  }

  var greatestCommonDivisors = [];
  for(var i = 1; i < nNum + s.length; i++) {
    greatestCommonDivisors.push(calculateGreatestCommonDivisor(nNum, i));
  }

  var conditionsSatisfied;
  for(var i = 0; i < greatestCommonDivisors.length; i++) {
    conditionsSatisfied = true;
    for(var j = 0; j < s.length; j++) {
      if(greatestCommonDivisors[i + j] === 1 && s[j] !== '1' || greatestCommonDivisors[i + j] !== 1 && s[j] === '1') {
        conditionsSatisfied = false;
        break;
      }
    }
    if(conditionsSatisfied) {
      answer++;
    }
  }

  return answer % 1000000007;
}