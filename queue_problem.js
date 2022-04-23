//* <링크>
// https://www.acmicpc.net/problem/10845

//? [문제]
// 정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

// 명령은 총 여섯 가지이다.

// push X: 정수 X를 큐에 넣는 연산이다.
// pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 큐에 들어있는 정수의 개수를 출력한다.
// empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
// front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

//? [입력]
// 첫째 줄에 주어지는 명령의 수 N (1 ≤ N ≤ 10,000)이 주어진다.
// 둘째 줄부터 N개의 줄에는 명령이 하나씩 주어진다. 주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같다.
// 문제에 나와있지 않은 명령이 주어지는 경우는 없다.

//? [출력]
// 출력해야하는 명령이 주어질 때마다, 한 줄에 하나씩 출력한다.

//? [예제 입력 1]
// 15
// push 1
// push 2
// front
// back
// size
// empty
// pop
// pop
// pop
// size
// empty
// pop
// push 3
// empty
// front

//? [예제 출력 1]
// 1
// 2
// 2
// 0
// 1
// 2
// -1
// 0
// 1
// -1
// 0
// 3

//* 내 답안
let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = require("fs").readFileSync("ex.txt").toString().split("\n");
line = input[0];
let arr = [];

console.log(input);
for (i = 1; i < input.length; i++) {
  if (input[i].match("push")) {
    item = Number(input[i].split(" ")[1]);
    arr.push(item);
  }
  if (input[i] === "pop") {
    if (arr[0] == undefined) {
      console.log(-1);
    } else {
      console.log(arr[0]);
      arr.shift();
    }
  }
  if (input[i] === "size") {
    console.log(arr.length);
  }
  if (input[i] === "empty") {
    if (arr[0] == undefined) {
      console.log(1);
    } else {
      console.log(0);
    }
  }
  if (input[i] === "front") {
    if (arr[0] == undefined) {
      console.log(-1);
    } else {
      console.log(arr[0]);
    }
  }
  if (input[i] === "back") {
    if (arr[0] == undefined) {
      console.log(-1);
    } else {
      console.log(arr[arr.length - 1]);
    }
  }
}

//* 다른 사람 답안

//★ 배운점
