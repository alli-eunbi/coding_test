//* <링크>
// https://programmers.co.kr/learn/courses/30/lessons/12899

//? [문제]
// 124 나라가 있습니다. 124 나라에서는 10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현합니다.

// 124 나라에는 자연수만 존재합니다.
// 124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.
// 예를 들어서 124 나라에서 사용하는 숫자는 다음과 같이 변환됩니다.

// 10진법	124 나라	10진법	124 나라
// 1	    1	        6	   14
// 2	    2	        7	   21
// 3	    4	        8	   22
// 4	    11	        9	   24
// 5	    12	        10	   41
// 자연수 n이 매개변수로 주어질 때, n을 124 나라에서 사용하는 숫자로 바꾼 값을 return 하도록 solution 함수를 완성해 주세요.

// 제한사항
// n은 500,000,000이하의 자연수 입니다.

//? [입출력]
// n	result
// 1	1
// 2	2
// 3	4
// 4	11

//* 내 답안
function solution(n) {
  var whole_num = "";

  while (1 <= n) {
    var divide = 0;
    num = Math.floor(n / 3);
    console.log(num, "숫자");

    if (n === 1) {
      return (whole_num = whole_num + "1");
    }
    if (num === 1) {
      num = 1;
    } else if (num === 2) {
      num = 2;
    } else {
      num = 4;
    }
    whole_num = whole_num + String(num);
    n = Math.floor(n / 3);
    // console.log(n, "숫자");
  }

  return whole_num;
}

console.log(solution(10));
//* 다른 사람 답안

//★ 배운점
