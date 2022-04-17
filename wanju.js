//* <링크>
//https://programmers.co.kr/learn/courses/30/lessons/42576

//? [문제]
// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
// 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.

//? [입출력]
// participant	                                         completion	                               return
// ["leo", "kiki", "eden"]	                            ["eden", "kiki"]	                        "leo"
// ["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	"vinko"
// ["mislav", "stanko", "mislav", "ana"                 ["stanko", "ana", "mislav"]	                "mislav"

//* 내 답안
function solution(participant, completion) {
  var Participants = new Map();

  participant.map((name) => {
    if (!Participants.get(name)) {
      Participants.set(name, 1);
    } else {
      Participants.set(name, Participants.get(name) + 1);
    }
  });
  console.log(Participants);

  completion.map((name) => {
    if (Participants.get(name)) {
      Participants.set(name, Participants.get(name) - 1);
    }
  });
  console.log(Participants);
  participant.map((name) => {
    if (Participants.get(name) >= 1) {
      answer = name;
      return answer;
    }
  });

  return answer;
}

//★ 배운점
// 자바스크립트 객체에는 "map"이라는 객체가 있으며, map 객체는 get, has, set과 같은 함수가 존재한다.
// 기존 객체의 경우 object["key"]로 value를 찾지만, map은 map.get("key")로 value 값을 찾을 수 있다.

console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
