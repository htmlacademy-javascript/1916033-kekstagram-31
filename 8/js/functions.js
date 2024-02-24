let getLength = function (string, maxLength) {
  if (string.length <= maxlength) {
    return true;
  }
  return false;
}

let isPalindrome = function (string) {
  const newString = (string.replaceAll(' ', '')).toLowerCase();
  let emptyString = '';
  for (let i = newString.length - 1; i >= 0; i--) {
    emptyString += newString.at(i);
  }
  return emptyString === newString;
}
