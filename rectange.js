//* <링크>
// https://programmers.co.kr/learn/courses/30/lessons/12969

//? [문제]
// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

// 제한 조건
// n과 m은 각각 1000 이하인 자연수입니다.

//? [입력]
//5 3

//? [출력]
//*****
//*****
//*****

//* 내 답안
// process.stdin.setEncoding("utf8");
// process.stdin.on("data", (data) => {
//   const n = data.split(" ");
//   const a = Number(n[0]),
//     b = Number(n[1]);
// });

function solution(data) {
  const data_array = data.split(" ");
  var x = Number(data_array[0]);
  var y = Number(data_array[1]);

  var i = 1;
  while (i <= x) {
    console.log("*".repeat(x) + "\n");
    i++;
  }
}
// 다른 사람 답안

// ★ 배운점

console.log(solution("5 3"));
