// 완주하지 못한선수 반환하기
// 동명이인 있다

/*
// 예시
const participant = ['mislav', 'stanko', 'mislav', 'ana'];
const completion = ['stanko', 'ana', 'mislav'];
return "mislav"
/*

/*
// 효율성 시간초과
function solution(participant, completion) {
  let answer = '';
  const length = participant.length - 1;

  for (let i = 0; i < length; i++) {
    const same = completion[i];
    const cut = participant.indexOf(same);
    participant.splice(cut, 1);
  }
  answer = participant.toString();
  
*/

function solution(participant, completion) {
  participant.sort(), completion.sort();
  let answer = '';

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}

// 아래 코드는 테스트를 위한 코드입니다.

const participant = ['mislav', 'stanko', 'mislav', 'ana'];
const completion = ['stanko', 'ana', 'mislav'];

console.log(solution(participant, completion));
