// '''
//? <링크>
// https://programmers.co.kr/learn/courses/30/lessons/12954

//? [문제]
// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
// 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// 조건
// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.

//! [입출력]
// x	n	answer
//================
// 2	5	[2,4,6,8,10]
// 4	3	[4,8,12]
// -4	2	[-4, -8]

//* 내 답안
function solution(x, n) {
  var num = [];
  while (num.length < n) {
    num.push(x * (num.length + 1));
  }
  return num;
}

//* 다른 사람 답안
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}

// ★ 배운점
// fill 함수를 사용하면 array를 채울 수 있음.
// Array(숫자)=> 숫자 길이만큼의 배열을 만들 수 있음.

console.log(solution(2, 5));
