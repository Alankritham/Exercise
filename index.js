function findLongestWordAndLength(str, ignoreSpecialChars, ignoreNumbers) {
  var strArray = str.split(' ');
  var longestWord = [];
  if (!ignoreSpecialChars || !ignoreNumbers) {
    return
  }
  for (var i in strArray) {
    strArray[i] = strArray[i].replace(/[^a-zA-Z]/g, '');
  }

  sortedStrArray = strArray.sort(function (a, b) {
    return b.length - a.length;
  });

  longestWord.push(sortedStrArray[0]);
  for (var i = 1; i < sortedStrArray.length; i++) {
    if (sortedStrArray[i].length == longestWord[0].length)
      longestWord.push(sortedStrArray[i]);
    else
      break;
  }
  longestWord = longestWord;
  longestWordLength = longestWord[0].length;

  return {
    "longestWord": longestWord,
    "longestWordLength": longestWordLength
  }
}

function finalOutput(str, shouldIgnoreSpecialChars, shouldIgnoreNumbers) {
  var finalResult = findLongestWordAndLength(str, shouldIgnoreSpecialChars, shouldIgnoreNumbers);
  var longestWord = finalResult.longestWord + ' ';
  var longestWordLength = finalResult.longestWord[0].length;
  document.getElementById("finalResult").innerHTML = longestWord.concat(longestWordLength);
}

function initialize() {
  var specialChars = document.getElementById('specialChars').checked;
  var numbers = document.getElementById('numbers').checked;
  var inputString = document.getElementById('stringInput').value;
  if (inputString) {
    finalOutput(inputString, specialChars, numbers);
  }
}

module.exports = { findLongestWordAndLength: findLongestWordAndLength };