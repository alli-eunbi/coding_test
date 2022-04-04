function solution(x) {
  console.log(x);

  const num = String(x);

  len = num.length;
  var sum_num = 0;

  var i = 0;
  while (i < len) {
    sum_num = sum_num + Number(num.charAt(i));
    console.log(sum_num);
    i++;
  }

  if (x % sum_num == 0) {
    return (answer = true);
  } else {
    return (answer = false);
  }
}

console.log(solution(18));
