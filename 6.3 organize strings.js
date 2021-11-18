const organizeString = (a, b) => {
  let str = a + b;
  return [...new Set(str)].sort().join("");
};
console.log(organizeString("xyaabbbccccdefww", "xxxxyyyabklmopq"));
