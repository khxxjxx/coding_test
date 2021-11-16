// 이진 변환 반복하기
// x의 모든 0을 제거합니다.
// x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
// s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때
// 이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return

function solution(s) {
  let answer = [0, 0];
  while (s != 1) {
    s.includes('0') && (answer[1] += s.match(/0/g).length);
    s = s.match(/1/g).length.toString(2);
    answer[0]++;
  }
  return answer;
}

// 아래코드는 테스트를 위한 코드입니다.
let s = '110010101001';
// return [3, 8]

console.log(solution(s));
