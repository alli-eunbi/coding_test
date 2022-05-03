function solution(numbers) {
  numbers.sort((a, b) => {
    if (a > b) {
      a = String(a).split("");
      b = String(b).split("");
      if (a.length <= b.length) {
        a.map((n, i) => {
          if (Number(n) > Number(b[i])) {
            return 1;
          } else {
            return -1;
          }
        });
      } else {
        b.map((n, i) => {
          if (Number(n) > Number(a[i])) {
            console.log("d");
            return -1;
          } else {
            return 1;
          }
        });
      }
      return 0;
    }
  });
  let answer = numbers.join("");
  return answer;
}

function solution2(numbers) {
  let answer = numbers
    .sort((a, b) => {
      return Number(String(b) + String(a)) - Number(String(a) + String(b));
    })
    .join("");
  return answer[0] === "0" ? "0" : answer;
}

console.log(solution2([6, 10, 2]));
console.log(solution2([0, 0, 0, 0]));
