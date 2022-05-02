function getMaxBarrier(initialEnergy, th) {
  // Write your code here
  let i = 1;
  while (i > 0) {
    let sum = initialEnergy.reduce((curr, prev) => {
      if (prev - i > 0) {
        return (curr = curr + prev);
      }
    });
    if (sum === th) {
      break;
    }
    if (sum < th) {
      i = i - 1;
      break;
    }
    i++;
  }
  return i;
}

console.log(getMaxBarrier([5, 2, 13, 10], 8));
