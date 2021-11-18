const accum = (letters) => {
  let letterArr = letters.split("");
  let letterToString = "";
  let res = [];
  for (let i = 0; i < letterArr.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0) {
        letterArr[i] = letterArr[i].toUpperCase();
      } else {
        letterArr[i] = letterArr[i].toLowerCase();
      }
      letterToString += letterArr[i];
    }
    res.push(letterToString);
    letterToString = "";
  }
  return res.join("-");
};

console.log(accum("abcd"));
console.log(accum("cwAt"));
console.log(accum("RqaEzty"));
