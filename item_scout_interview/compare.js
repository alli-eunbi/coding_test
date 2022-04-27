const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 35 },
];

items.sort((a, b) => {
  // compare 함수 완성할 것.
  return b.value - a.value;
});
console.log(items);
console.log(
  items.map((item) => {
    // callback 함수 완성할 것.\
    return item.name;
  })
);
