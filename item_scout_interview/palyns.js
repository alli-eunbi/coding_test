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

function solution(s) {
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

console.log(solution("abacde"));
// 출력 결과 : aba
