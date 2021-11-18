let arr = [1, 2, 3, 4, 5, 6, 7, 8];

//filter

let onlyEven = arr.filter((e) => {
  return e % 2 == 0;
});
console.log(onlyEven);

//for each

arr.forEach((e) => {
  console.log(`num : ${e}`);
});

//map

let multByTwo = arr.map((e) => {
  return e * 2;
});
console.log(multByTwo);
