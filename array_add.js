function solution(arr1, arr2) {
  const answer = arr1.map((_arr1, i) => {
    return arr2[i].map((_arr2, j) => {
      return arr1[i][j] + arr2[i][j];
    });
  });
  return answer;
}

console.log(solution([[1], [2]], [[3], [4]]));
// console.log(solution([]], [[[1], [1]]]));
