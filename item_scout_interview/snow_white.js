//* <링크>
// https://www.acmicpc.net/problem/3040

//? [문제]
// 매일 매일 일곱 난쟁이는 광산으로 일을 하러 간다.
// 난쟁이가 일을 하는 동안 백설공주는 그들을 위해 저녁 식사를 준비한다.
// 백설공주는 의자 일곱개, 접시 일곱개, 나이프 일곱개를 준비한다.

// 어느 날 광산에서 아홉 난쟁이가 돌아왔다.
// (왜 그리고 어떻게 아홉 난쟁이가 돌아왔는지는 아무도 모른다)
// 아홉 난쟁이는 각각 자신이 백설공주의 일곱 난쟁이라고 우기고 있다.

// 백설공주는 이런 일이 생길 것을 대비해서, 난쟁이가 쓰고 다니는 모자에 100보다 작은 양의 정수를 적어 놓았다.
// 사실 백설 공주는 공주가 되기 전에 매우 유명한 수학자였다. 따라서, 일곱 난쟁이의 모자에 쓰여 있는 숫자의 합이 100이 되도록 적어 놓았다.

// 아홉 난쟁이의 모자에 쓰여 있는 수가 주어졌을 때, 일곱 난쟁이를 찾는 프로그램을 작성하시오.
// (아홉 개의 수 중 합이 100이 되는 일곱 개의 수를 찾으시오)

//? [입력]
// 총 아홉개 줄에 1보다 크거나 같고 99보다 작거나 같은 자연수가 주어진다. 모든 숫자는 서로 다르다.
// 또, 항상 답이 유일한 경우만 입력으로 주어진다.

//? [출력]
// 일곱 난쟁이가 쓴 모자에 쓰여 있는 수를 한 줄에 하나씩 출력한다.

//? [예제 입력 1]
// 8
// 6
// 5
// 1
// 37
// 30
// 28
// 22
// 36

//? [예제 출력 1]
// 8
// 6
// 5
// 1
// 30
// 28
// 22

//* 내 답안
function solution(arr) {
  const rest =
    arr.reduce((a, b) => {
      return a + b;
    }, 0) - 100;

  let answer = [];
  outerFor: for (let x = 0; x < arr.length; x++) {
    for (let y = arr.length - 1; y > 0; y--) {
      if (arr[x] + arr[y] === rest) {
        answer.push(x);
        answer.push(y);
        break outerFor;
      }
    }
    x++;
  }

  answer.sort();
  arr.splice(answer[0], 1);
  arr.splice(answer[1] - 1, 1);
  return arr;
}

const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
const arr1 = [8, 6, 5, 1, 37, 30, 28, 22, 36];
console.log(solution(arr1));
//* 다른 사람 답안

//★ 배운점

// 그동안의 시도
// function solution(arr) {
//   //여기에 코드를 작성한다고 생각해주시면 됩니다.
//   let add;
//   arr.reduce((curr, prev) => {
//     return (add = prev + curr);
//   });

//   let left;
//   if (add > 100) {
//     left = add - 100;
//   }
//   let answer = [];
//   let num_1;
//   let num_2;
//   arr.map((number, index) => {
//     if (number + arr[index - 1] == left) {
//       num_1 = number;
//       num_2 = arr[index - 1];
//     }
//   });

//   arr.splice(arr.indexOf(num_1), 1);
//   arr.splice(arr.indexOf(num_2), 1);

//   return arr;
// }
// const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
// console.log(solution(arr));

let fs = require("fs");
let arr = require("fs").readFileSync("ex.txt").toString().split("\n");
// let arr = fs.readFileSync("/dev/stdin").toString().split("\n");

console.log(arr);
const rest =
  arr.reduce((a, b) => {
    return Number(a) + Number(b);
  }, 0) - 100;

console.log(rest);
let answer = [];
outerFor: for (let x = 0; x < arr.length; x++) {
  for (let y = arr.length - 1; y > 0; y--) {
    if (Number(arr[x]) + Number(arr[y]) === rest) {
      answer.push(Number(x));
      answer.push(Number(y));
      break outerFor;
    }
  }
  x++;
}

answer.sort();
arr.splice(answer[0], 1);
arr.splice(answer[1] - 1, 1);
console.log(arr);
arr.map((a) => {
  console.log(a);
});
