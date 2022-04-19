//* <링크>
// https://programmers.co.kr/learn/courses/30/lessons/81301/solution_groups?language=javascript

//? [문제]
// 네오와 프로도가 숫자놀이를 하고 있습니다.
//네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다.
//s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

// 참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.
// 숫자	영단어
// 0	zero
// 1	one
// 2	two
// 3	three
// 4	four
// 5	five
// 6	six
// 7	seven
// 8	eight
// 9	nine

// 제한사항
// 1 ≤ s의 길이 ≤ 50
// s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
// return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.

//? [입출력]
//       s	              result
// "one4seveneight"	       1478
// "23four5six7"	      234567
// "2three45sixseven"	   234567
// "123"	                123

//\* 내 답안
function solution(s) {
  var list = s.match(/zero|one|two|three|four|five|six|seven|eight|nine|\d/g);

  list = list.map((n) => {
    if (n == "one") {
      n = 1;
      return n;
    } else if (n == "zero") {
      n = 0;
      return n;
    } else if (n == "two") {
      n = 2;
      return n;
    } else if (n == "three") {
      n = 3;
      return n;
    } else if (n == "four") {
      n = 4;
      return n;
    } else if (n == "five") {
      n = 5;
      return n;
    } else if (n == "six") {
      n = 6;
      return n;
    } else if (n == "seven") {
      n = 7;
      return n;
    } else if (n == "eight") {
      n = 8;
      return n;
    } else if (n == "nine") {
      n = 9;
      return n;
    } else {
      n = Number(n);
      return n;
    }
  });

  return Number(list.join(""));
}

//\* 다른 사람 답안
function solution(s) {
  s = s
    .replace(/zero/gi, 0)
    .replace(/one/gi, 1)
    .replace(/two/gi, 2)
    .replace(/three/gi, 3)
    .replace(/four/gi, 4)
    .replace(/five/gi, 5)
    .replace(/six/gi, 6)
    .replace(/seven/gi, 7)
    .replace(/eight/gi, 8)
    .replace(/nine/gi, 9);
  return parseInt(s);
}

//★ 배운점
// string에서는 .replace를 사용하는 것이 더 편함
// 정규표현식에서 g는 발생할 모든 pattern에 대한 전역 검색, gi는 대/소문자 구분 안함
// .join은 배열을 string으로 변환, 만약에 콤마를 빼고 string으로 변환하고 싶으면 .join("")을 사용

console.log(solution("one4seveneight"));
