const countingDuplicated = (string) => {
  string = string.toLowerCase();
  let resObj = {};
  let str = "";

  for (let i = 0; i < string.length; i++) {
    if (resObj[string[i]]) {
      resObj[string[i]]++;
    } else {
      resObj[string[i]] = 1;
    }
  }

  for (const [key, value] of Object.entries(resObj)) {
    if (value > 1) {
      str += ` ${key}:${value} `;
    }
  }
  return str;
};

console.log(countingDuplicated("abcdeffaGg"));
