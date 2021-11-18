const checkIsogram = (word) => {
  let wordArr = [...word].join("");
  let wordSet = [...new Set(word)].join("");
  return wordArr === wordSet ? true : false;
};

console.log(checkIsogram("aba"));
console.log(checkIsogram("Dermatoglyphics"));
