// 틀린 풀이
function solution2(progresses, speeds) {
  var answer = [];

  days = progresses.map((job, i) => {
    let day = 1;
    while (day < 100) {
      if (job + day * speeds[i] >= 100) {
        return day;
      }
      day++;
    }
  });
  console.log(days);

  job = 1;

  days.reduce((prev, curr) => {
    if (prev >= curr) {
      job += 1;
      console.log("ㄷ", prev, curr, job);
      return job, prev;
    }
    if (job == 1 && prev < curr) {
      answer.push(job);
      return job, prev;
    }
    if (job != 1 && prev < curr) {
      answer.push(job);
      job = 1;
      answer.push(job);
      console.log("ㄷ", prev, curr, job);
      return job, prev;
    }
    if (prev === days[days.length - 1]) {
      answer.push(job);
    }
  });

  return answer;
}

function solution(progresses, speeds) {
  return progresses
    .reduce((results, progress, index) => {
      const speed = speeds[index];
      const endDate = Math.ceil((100 - progress) / speed);
      const result = results[results.length - 1];

      console.log(result, "리절트");

      if (result && result[0] >= endDate) {
        result.push(endDate);
      } else {
        results.push([endDate]);
      }
      console.log(results, "리졀츠");
      return results;
    }, [])
    .map((result) => result.length);
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
