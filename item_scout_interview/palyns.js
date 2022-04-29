//* <링크>
// https://programmers.co.kr/learn/courses/30/lessons/12904

//? [문제]
//앞뒤를 뒤집어도 똑같은 문자열을 팰린드롬(palindrome)이라고 합니다.
// 문자열 s가 주어질 때, s의 부분문자열(Substring)중 가장 긴 팰린드롬의 길이를 return 하는 solution 함수를 완성해 주세요.

// 예를들면, 문자열 s가 "abcdcba"이면 7을 return하고 "abacde"이면 3을 return합니다.

// 제한사항
// 문자열 s의 길이 : 2,500 이하의 자연수
// 문자열 s는 알파벳 소문자로만 구성

//? [입출력]
//    s	      answer
// "abcdcba"	  7
// "abacde"	    3

//* 내 답안
function solution(s) {
  const num = s.length();
}

console.log(solution("abacde"));
//* 다른 사람 답안

//★ 배운점

//* 시도들

// function solution(s) {
//   //여기에 코드를 작성한다고 생각해주시면 됩니다.
//   const word = s.split("");

//   const word_2 = word.map((w, index) => {
//     return word[word.length - 1 - index];
//   });
//   let answer = [];
//   word.map((w, index) => {
//     if (w == word_2[index]) {
//       answer.push(w);
//     } else {
//       return;
//     }
//   });
//   return String(answer);
// }

function solution2(s) {
  //여기에 코드를 작성한다고 생각해주시면 됩니다.
  const word = s.split("");
  let answer = [];
  word.map((w, index) => {
    if (w % 2) {
    }
  });
  return String(answer);
}
// console.log(solution("babad"));
// // 출력 결과 : bab 혹은 aba(둘중 하나만 나와도 됩니다)

// console.log(solution("cbbd"));
// // 출력 결과 : bb

// console.log(solution("abcdcba"));
// 출력 결과 : abcdcba
