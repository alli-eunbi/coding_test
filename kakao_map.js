//* <링크>
//https://programmers.co.kr/learn/courses/30/lessons/17681

//? [문제]
// 비밀지도
// 네오는 평소 프로도가 비상금을 숨겨놓는 장소를 알려줄 비밀지도를 손에 넣었다. 그런데 이 비밀지도는 숫자로 암호화되어 있어 위치를 확인하기 위해서는 암호를 해독해야 한다. 다행히 지도 암호를 해독할 방법을 적어놓은 메모도 함께 발견했다.

// 지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
// 전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 "지도 1"과 "지도 2"라고 하자. 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다. 지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
// "지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.
// 암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.

//? [입력]
// 입력으로 지도의 한 변 크기 n 과 2개의 정수 배열 arr1, arr2가 들어온다.

// 1 ≦ n ≦ 16
// arr1, arr2는 길이 n인 정수 배열로 주어진다.
// 정수 배열의 각 원소 x를 이진수로 변환했을 때의 길이는 n 이하이다. 즉, 0 ≦ x ≦ 2n - 1을 만족한다.

//! [출력]
//원래의 비밀지도를 해독하여 '#', 공백으로 구성된 문자열 배열로 출력하라.

//! [예제 입력 1]
// 매개변수	 값
// n	   5
// arr1	 [9, 20, 28, 18, 11]
// arr2	 [30, 1, 21, 17, 28]
// 출력	 ["#####","# # #", "### #", "# ##", "#####"]

//! [예제 출력 1]
// 매개변수	값
// n	  6
// arr1	 [46, 33, 33 ,22, 31, 50]
// arr2	 [27 ,56, 19, 14, 14, 10]
// 출력	 ["######", "### #", "## ##", " #### ", " #####", "### # "]

//*# 내 답안
function solution1(n, arr1, arr2) {
  arr1 = arr1.map((i) => {
    var str = "";
    while (0 < i) {
      if (i % 2 == 1) {
        str = "#" + str;
      } else {
        str = " " + str;
      }
      i = Math.floor(i / 2);
    }
    if (str.length < n) {
      space = n - str.length;
      str = " ".repeat(space) + str;
    }
    return str;
  });

  arr2 = arr2.map((i) => {
    var str = "";
    while (0 < i) {
      if (i % 2 == 1) {
        str = "#" + str;
      } else {
        str = " " + str;
      }
      i = Math.floor(i / 2);
    }
    if (str.length < n) {
      space = n - str.length;
      str = " ".repeat(space) + str;
    }
    return str;
  });
  console.log(arr1[1].split(""));

  console.log(arr1, arr2);
}

console.log(solution1(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));

// //* 다른 시도 => #이 or 조건으로 붙여지기 때문에 숫자를 미리 더하면 안됨
// function solution(n, arr1, arr2) {
//   var limit_num = 0;
//   var answer = [];
//   var i = 0;

//   while (i < n) {
//     num = Math.pow(2, i);
//     limit_num += num;
//     i++;
//   }
//   console.log(limit_num);

//   var x = 0;
//   while (x < n) {
//     var str = "";
//     var sum = arr1[x] + arr2[x];
//     if (sum >= limit_num) {
//       str = "#".repeat(n);
//     } else {
//       while (0 < sum) {
//         if (sum % 2 == 1) {
//           str = "#" + str;
//         } else {
//           str = " " + str;
//         }
//         sum = Math.floor(sum / 2);
//       }
//       space = n - str.length;
//       str = " ".repeat(space) + str;
//     }
//     answer.push(str);
//     x++;
//   }
//   return answer;
// }
// console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));

// ★ 배운점

function solution(n, arr1, arr2) {
  let result = arr1.map((a, i) =>
    (a | arr2[i])
      .toString(2)
      .padStart(n, "0")
      .replace(/0/g, " ")
      .replace(/1/g, "#")
  );
  return result;
}

// 1. .toString()
//     number.toString(radix)
//     `radix` Optional수의 값을 나타내기 위해 사용되기 위한 기준을 정하는 2와 36사이의 정수. (진수를 나타내는 기수의 값.)
//     12.toString(2) ⇒ 2진수
//     **String() 과 헷갈리지 말기**

// 2. .repeat()
//     “$”.repeat(3) 을 하면 “$$$”가 됨

// 3. Math.pow, Math.ceil, Math.floor, Math.round
//     !숫자.ceil() 아님
//     1. Math.pow(1,2) ⇒ 1의 제곱
//     2. Math.ceil(1.2) ⇒ 2 올림.
//     3. Math.floor(1.2) ⇒ 1 소수점 버림
//     4. Math.round(1.5) ⇒2 반올림

// 4. 자바스크립트 비트 연산자
//     [https://blankspace-dev.tistory.com/425](https://blankspace-dev.tistory.com/425)

// 5. .padStart() / .padEnd()
//     1. .padStart(자릿수, 들어갈 것)
//         12.padStart(3, 0) ⇒ 012
//         12.padStart(3) ⇒ “ 12”
//     2. .padEnd(자릿수, 들어갈 것)
//         12.padStart(3, 0) ⇒ 120

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]);
