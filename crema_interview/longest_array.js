function maxLength(a, k) {
  // Write your code here

  let first_index = 0;
  let last_index = a.length - 1;
  let sum = 0;
  a.map((e) => {
    sum = sum + e;
  });
  while (sum > k) {
    if (a[first_index] >= a[last_index]) {
      sum = sum - a[first_index];
      first_index += 1;
    } else {
      sum = sum - a[last_index];
      last_index -= 1;
    }
  }
  console.log(first_index, last_index);
  return last_index - first_index + 1;
}

console.log(maxLength([3, 1, 2, 1], 4));
console.log(maxLength([1, 2, 3], 4));
