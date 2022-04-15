//*  <링크>
//https://programmers.co.kr/learn/courses/30/lessons/64061

//? [예제 입력 1]
// board	                                                           moves	        result
// [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]	[1,5,3,5,1,2,1,4]	4

//*# 내 답안

function solution(board, moves) {
  var arr = new Array();
  const total_doll = Array.from(arr);
  var answer = 0;
  console.log(total_doll);

  moves.map((n, i) => {
    console.log("순서", i);
    if (board[board.length - 1][n - 1] == 0) {
      return;
    } else {
      var x = 0;

      while (x < board.length) {
        if (board[x][n - 1] != 0) {
          if (!total_doll[0]) {
            total_doll[0] = board[x][n - 1];
          }
          if (total_doll[total_doll.length - 1] != board[x][n - 1]) {
            total_doll[total_doll.length - 1] = board[x][n - 1];
          }
          if (total_doll[total_doll.length - 1] == board[x][n - 1]) {
            total_doll.pop();
            answer += 2;
          }
        }
        board[x][n - 1] = 0;
        x++;
      }
      console.log("순서별 array", total_doll);
    }
  });
  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
//* 다른 사람 답안

//★ 배운점
