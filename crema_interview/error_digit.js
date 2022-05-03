function findRange(num) {
  // Write your code here
  num_array = num.toString().split("").map(Number);
  let max_num;
  let min_mun;

  if (num_array[0] !== 9) {
    max_num = num_array.map((ele) => {
      if (ele === num_array[0]) {
        return (ele = 9);
      } else {
        return ele;
      }
    });
  } else {
    not_9 = String(num).search(/[0-8]/g);

    if (not_9 === -1) {
      max_num = num_array;
    } else {
      max_num = num_array.map((ele) => {
        if (num_array[not_9] === ele) {
          return (ele = 9);
        }
        return ele;
      });
    }
  }

  if (num_array[0] !== 1) {
    min_num = num_array.map((ele) => {
      if (ele === num_array[0]) {
        return (ele = 1);
      } else {
        return ele;
      }
    });
    // console.log(num);
    // console.log(max_num);
  } else {
    not_1_0 = String(num).search(/[2-9]/g);

    if (not_1_0 === -1) {
      min_num = num_array;
    } else {
      min_num = num_array.map((ele) => {
        if (num_array[not_1_0] === ele) {
          return (ele = 0);
        }
        return ele;
      });
    }
  }

  return Number(max_num.join("")) - Number(min_num.join(""));
}

console.log(findRange(909));
