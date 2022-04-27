function solution(arr) {
  //여기에 코드를 작성한다고 생각해주시면 됩니다.
  let add;
  arr.reduce((curr, prev) => {
    return (add = prev + curr);
  });

  let left;
  if (add > 100) {
    left = add - 100;
  }
  let answer = [];
  let num_1;
  let num_2;
  arr.map((number, index) => {
    if (number + arr[index - 1] == left) {
      num_1 = number;
      num_2 = arr[index - 1];
    }
  });

  arr.splice(arr.indexOf(num_1), 1);
  arr.splice(arr.indexOf(num_2), 1);

  return arr;
}
const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
