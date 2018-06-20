// Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".


//(condition) ? expression on true : expression on false
//****
function sortByStrings(s, t) {
  let letterOrderCounter = {};
  let finalStr = '';
  for (let char of s) {
    if (!letterOrderCounter[char]) {
      letterOrderCounter[char] = 1
    } else {
      letterOrderCounter[char]++;
    }
  }

  for (let char of t) {
    if (letterOrderCounter[char]) {
      finalStr += char.repeat(letterOrderCounter[char])
    }
  }

  return finalStr;
}
sortByStrings('weather', 'therapyw')
//theeraw
//sortByStrings('good', 'odg')
//oodj
























