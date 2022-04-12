//* https://programmers.co.kr/learn/courses/30/lessons/12931

//? [문제]
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

//! [입출력]
// N	answer
// 123	6
// 987	24

//? 입출력 예 설명
// 입출력 예 #1
// 문제의 예시와 같습니다.

// 입출력 예 #2
// 9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.

//* 내 답안
function solution(n) {
  const number = String(n);
  var sum = 0;
  var i = 0;
  while (i < number.length) {
    sum += Number(number.charAt(i));
    i++;
  }
  return sum;
}

//* 다른 사람 답안
function solution(n) {
  // 쉬운방법
  return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
}

// ★ 배운점
//number+"" => 자동으로 string으로 타입 변환을 해줌

solution(123);
